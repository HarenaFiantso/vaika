'use client';

import CustomButton from './customButton';
import { CarCardInfoSkeleton } from './skeleton';
import { Appointment, AppointmentFormData, AppointmentProps } from '@/constants';
import { appointmentApi } from '@/services/vaika-api';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Appointment as Aptm } from '@vaika-api/typescript-client';
import { useState } from 'react';
import { UUID } from 'uuid-generator-ts';

export default function AppointmentForm({ carId }: AppointmentProps) {
  const uuid = new UUID();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(Appointment),
    defaultValues: {
      car_id: carId,
      id: uuid.toString(),
      status: "PENDING"
    },
  });
  const onSubmit: SubmitHandler<AppointmentFormData> = (data) => {
    appointmentApi.crupdateAppointment([data]).then((response) => console.log(response)).catch((error)=>console.log(error));
  };
  return (
    <section
      id='appointment'
      className='mx-auto mt-3 flex max-w-[1440px] flex-col items-center gap-5 px-20 md:flex-row'
    >
      <div className='h-[100%] w-full md:w-[45%]'>
        <CarCardInfoSkeleton idCar={carId} />
      </div>
      <div className='w-full md:w-[70%] '>
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex w-[100%] flex-col px-7 md:w-[80%]'>
          <h1 className='pb-2 text-2xl font-semibold text-indigo-400'>Create an appointment</h1>
          <p className='mb-5 pb-5'>Please complete these following fields to take an appointment</p>
          <div className='flex w-[100%] flex-col justify-between gap-2 pb-2 md:flex-row'>
            <div className='bg-red w-[100%]'>
              <label className='text-sm text-white'>Firstname</label>
              <input
                className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
                {...register('first_name')}
              />
              {errors.first_name && <span className='text-xs'>this field should be more longer</span>}
            </div>

            <div className='bg-blue w-[100%]'>
              <label className='text-sm text-white'>Lastname</label>
              <input
                className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
                {...register('last_name')}
              />
              {errors.last_name && <span className='text-xs'>this should be more longer</span>}
            </div>
          </div>

          <div className='pb-2'>
            <label className='text-sm text-white'>Email</label>
            <input className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none' {...register('email')} />
            {errors.email && <span className='text-xs'>this should be a valid email</span>}
          </div>

          <div className='pb-2'>
            <label className='text-sm text-white'>Contact</label>
            <input
              className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
              {...register('contact')}
            />
            {errors.contact && <span className='text-xs'>this should be a valid phone number</span>}
          </div>

          <div className='pb-2'>
            <label className='text-sm text-white'>Date</label>
            <input
              className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
              type='datetime-local'
              {...register('appointment_datetime')}
            />
            {errors.appointment_datetime && <span> {errors.appointment_datetime.message} </span>}
          </div>

          <div>
            <label className='text-sm text-white'>Message</label>
            <textarea className='w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none' {...register('message')} />
            {errors.message && <span className='text-xs'>message should be more longer</span>}
          </div>

          <CustomButton
            title='Submit'
            type='submit'
            containerStyle=' mx-left mt-[1rem] w-[30%] bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
          />
        </form>
      </div>
    </section>
  );
}
