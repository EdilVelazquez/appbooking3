import React from 'react';
import { XCircle } from 'lucide-react';
import { Booking } from '../../types/room';

interface ReservationActionsProps {
  reservation: Booking;
  onCancel: (id: string) => void;
  isCancelling: boolean;
}

export const ReservationActions: React.FC<ReservationActionsProps> = ({
  reservation,
  onCancel,
  isCancelling,
}) => {
  if (reservation.status !== 'confirmed') {
    return null;
  }

  return (
    <button
      onClick={() => onCancel(reservation.id)}
      disabled={isCancelling}
      className="flex items-center text-red-600 hover:text-red-900 disabled:opacity-50"
    >
      <XCircle className="w-4 h-4 mr-1" />
      {isCancelling ? 'Cancelando...' : 'Cancelar'}
    </button>
  );
};