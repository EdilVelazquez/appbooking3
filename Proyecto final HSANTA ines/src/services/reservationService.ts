import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc,
  Timestamp,
  serverTimestamp,
  getDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Booking } from '../types/room';

const RESERVATIONS_COLLECTION = 'reservations';

export const addReservation = async (reservation: Omit<Booking, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, RESERVATIONS_COLLECTION), {
      ...reservation,
      roomId: Number(reservation.roomId),
      numberOfGuests: Number(reservation.numberOfGuests),
      checkIn: Timestamp.fromDate(new Date(reservation.checkIn)),
      checkOut: Timestamp.fromDate(new Date(reservation.checkOut)),
      createdAt: serverTimestamp(),
      status: 'confirmed'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding reservation:', error);
    throw new Error('No se pudo crear la reservación. Por favor intente nuevamente.');
  }
};

export const getReservations = async (): Promise<Booking[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, RESERVATIONS_COLLECTION));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        roomId: Number(data.roomId),
        guestName: String(data.guestName),
        email: String(data.email),
        phone: String(data.phone),
        numberOfGuests: Number(data.numberOfGuests),
        status: data.status as 'confirmed' | 'cancelled',
        specialRequests: data.specialRequests ? String(data.specialRequests) : undefined,
        checkIn: data.checkIn.toDate(),
        checkOut: data.checkOut.toDate(),
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate()
      } as Booking;
    });
  } catch (error) {
    console.error('Error getting reservations:', error);
    throw new Error('Error al obtener las reservaciones');
  }
};

export const cancelReservation = async (id: string): Promise<void> => {
  try {
    if (!id || typeof id !== 'string') {
      throw new Error('ID de reservación inválido');
    }

    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    const reservationDoc = await getDoc(reservationRef);
    
    if (!reservationDoc.exists()) {
      throw new Error('La reservación no existe');
    }

    const currentStatus = reservationDoc.data()?.status;
    
    if (currentStatus === 'cancelled') {
      throw new Error('La reservación ya está cancelada');
    }

    await updateDoc(reservationRef, {
      status: 'cancelled',
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error cancelling reservation:', error);
    throw new Error(error instanceof Error ? error.message : 'No se pudo cancelar la reservación');
  }
};

export const updateReservation = async (id: string, updates: Partial<Booking>): Promise<void> => {
  try {
    if (!id || typeof id !== 'string') {
      throw new Error('ID de reservación inválido');
    }

    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    const updateData: Record<string, any> = { 
      ...updates,
      updatedAt: serverTimestamp()
    };
    
    if (updates.checkIn) {
      updateData.checkIn = Timestamp.fromDate(new Date(updates.checkIn));
    }
    if (updates.checkOut) {
      updateData.checkOut = Timestamp.fromDate(new Date(updates.checkOut));
    }
    if (updates.roomId !== undefined) {
      updateData.roomId = Number(updates.roomId);
    }
    if (updates.numberOfGuests !== undefined) {
      updateData.numberOfGuests = Number(updates.numberOfGuests);
    }
    
    await updateDoc(reservationRef, updateData);
  } catch (error) {
    console.error('Error updating reservation:', error);
    throw new Error('No se pudo actualizar la reservación');
  }
};

export const getReservationsByDateRange = async (start: Date, end: Date): Promise<Booking[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, RESERVATIONS_COLLECTION));
    const reservations = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        roomId: Number(data.roomId),
        guestName: String(data.guestName),
        email: String(data.email),
        phone: String(data.phone),
        numberOfGuests: Number(data.numberOfGuests),
        status: data.status as 'confirmed' | 'cancelled',
        specialRequests: data.specialRequests ? String(data.specialRequests) : undefined,
        checkIn: data.checkIn.toDate(),
        checkOut: data.checkOut.toDate(),
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate()
      } as Booking;
    });

    return reservations.filter(reservation => 
      reservation.status === 'confirmed' &&
      reservation.checkOut >= start &&
      reservation.checkIn <= end
    );
  } catch (error) {
    console.error('Error getting reservations by date range:', error);
    throw new Error('Error al obtener las reservaciones por rango de fecha');
  }
};