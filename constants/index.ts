import z from 'zod';
import { AppointmentStatusEnum } from '@vaika-api/typescript-client';

export const yearsOfProduction = [
  { title: 'Year', value: 'year' },
  { title: '2015', value: '2015' },
  { title: '2016', value: '2016' },
  { title: '2017', value: '2017' },
  { title: '2018', value: '2018' },
  { title: '2019', value: '2019' },
  { title: '2020', value: '2020' },
  { title: '2021', value: '2021' },
  { title: '2022', value: '2022' },
  { title: '2023', value: '2023' },
];

export const fuels = [
  {
    title: 'Fuel',
    value: 'fuel',
  },
  {
    title: 'Gas',
    value: 'Gas',
  },
  {
    title: 'Electricity',
    value: 'Electricity',
  },
];

export const Appointment = z.object({
  id: z.string(),
  last_name: z.string().min(5),
  first_name: z.string().min(5),
  email: z.string().email(),
  contact: z.string().min(10).max(10),
  message: z.string().min(5),
  appointment_datetime: z.coerce.date(),
  car_id: z.string(),
  status: z.enum([AppointmentStatusEnum.PENDING])
}).required();

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
