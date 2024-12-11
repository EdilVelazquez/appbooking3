import React from 'react';

interface ReservationStatusProps {
  status: 'confirmed' | 'cancelled';
}

export const ReservationStatus: React.FC<ReservationStatusProps> = ({ status }) => {
  const statusClasses = {
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const statusText = {
    confirmed: 'Confirmada',
    cancelled: 'Cancelada',
  };

  return (
    <span
      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusClasses[status]
      }`}
    >
      {statusText[status]}
    </span>
  );
};