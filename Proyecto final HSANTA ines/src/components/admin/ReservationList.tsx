import React from 'react';
import { format } from 'date-fns';
import { XCircle } from 'lucide-react';
import { useFirebaseReservations } from '../../hooks/useFirebaseReservations';
import { cancelReservation } from '../../services/reservationService';
import { ReservationStatus } from './ReservationStatus';
import { ReservationActions } from './ReservationActions';

export const ReservationList: React.FC = () => {
  const { reservations, loading, error } = useFirebaseReservations();
  const [cancellingId, setCancellingId] = React.useState<string | null>(null);

  const handleCancelReservation = async (id: string) => {
    if (!window.confirm('¿Está seguro de que desea cancelar esta reservación?')) {
      return;
    }

    setCancellingId(id);
    try {
      await cancelReservation(id);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al cancelar la reservación';
      alert(errorMessage);
    } finally {
      setCancellingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (reservations.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
        No hay reservaciones disponibles
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Detalles del Huésped
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Habitación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fechas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {reservation.guestName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.email}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.phone}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    Habitación {reservation.roomId}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.numberOfGuests} huéspedes
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {format(new Date(reservation.checkIn), 'dd/MM/yyyy')} -
                    {format(new Date(reservation.checkOut), 'dd/MM/yyyy')}
                  </div>
                  <div className="text-xs text-gray-500">
                    Creada: {format(new Date(reservation.createdAt), 'dd/MM/yyyy HH:mm')}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <ReservationStatus status={reservation.status} />
                </td>
                <td className="px-6 py-4">
                  <ReservationActions
                    reservation={reservation}
                    onCancel={handleCancelReservation}
                    isCancelling={cancellingId === reservation.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};