import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Booking } from '../types/room';

export const useFirebaseReservations = () => {
  const [reservations, setReservations] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const reservationsRef = collection(db, 'reservations');
    
    const unsubscribe = onSnapshot(
      query(reservationsRef),
      (snapshot) => {
        try {
          const updatedReservations = snapshot.docs.map((doc) => {
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
              checkIn: data.checkIn?.toDate() || new Date(),
              checkOut: data.checkOut?.toDate() || new Date(),
              createdAt: data.createdAt?.toDate() || new Date(),
              updatedAt: data.updatedAt?.toDate()
            } as Booking;
          });
          
          setReservations(updatedReservations);
          setLoading(false);
          setError(null);
        } catch (err) {
          console.error('Error processing reservations:', err);
          setError('Error al procesar las reservaciones');
          setLoading(false);
        }
      },
      (err) => {
        console.error('Error fetching reservations:', err);
        setError('Error al cargar las reservaciones');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { reservations, loading, error };
};