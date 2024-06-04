'use client';

import { AppointmentForm } from '@/components';
import { AppointmentProps } from '@/constants';
import { useParams } from 'next/navigation';

export default function Appointment() {
  const { carId } = useParams<AppointmentProps>();

  return (
    <main className='relative h-[100vh] w-full overflow-auto pt-20 text-white'>
      <AppointmentForm carId={carId} />
    </main>
  );
}
