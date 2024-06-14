import { AppointmentStatusEnum } from '@vaika-api/typescript-client';
import z from 'zod';

export const Appointment = z
  .object({
    id: z.string(),
    last_name: z.string().min(5),
    first_name: z.string().min(5),
    email: z.string().email(),
    contact: z.string().min(10).max(10),
    message: z.string().min(5),
    appointment_datetime: z.coerce.date(),
    car_id: z.string(),
    status: z.enum([AppointmentStatusEnum.PENDING]),
  })
  .required();

export type AppointmentFormData = z.infer<typeof Appointment>;

export type AppointmentProps = {
  carId: string;
};

export type IdCar = {
  idCar: string;
};

export type Id = {
  id: string;
};
