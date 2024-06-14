'use client';

import { Appointment, AppointmentFormData, AppointmentProps } from '@/constants';
import { carApi } from '@/services/vaika-api';
import { appointmentApi } from '@/services/vaika-api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Category, Colorize } from '@mui/icons-material';
import { Car } from '@vaika-api/typescript-client';
import { Appointment as Aptm } from '@vaika-api/typescript-client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsHammer, BsLightning } from 'react-icons/bs';
import { PiEngine, PiMotorcycle } from 'react-icons/pi';
import { SiWorkplace } from 'react-icons/si';
import { UUID } from 'uuid-generator-ts';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  const pathname = usePathname().split('/');
  const id = pathname[2];
  const [car, setCar] = useState<Car | undefined>();
  const [showDialog, setShowDialog] = useState(false);

  const uuid = new UUID();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(Appointment),
    defaultValues: {
      car_id: id,
      id: uuid.toString(),
      status: 'PENDING',
    },
  });
  const onSubmit: SubmitHandler<AppointmentFormData> = (data) => {
    appointmentApi
      .crupdateAppointment([data])
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleAppointmentClick = () => {
    setShowDialog(true);
  };

  useEffect(() => {
    carApi.getACarById(id).then((data) => setCar(data.data));
  }, [id]);

  return (
    <section className='relative mx-auto max-w-[1440px] p-2 pt-16'>
      {car ? (
        <div>
          <div className='flex w-full flex-row gap-6'>
            <div className='w-1/2 rounded-2xl bg-zinc-400'>
              <Image
                src={`${car.images?.map((image) => image.url)}`}
                alt='car'
                width={1024}
                height={1024}
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='flex w-full max-w-sm flex-col p-4'>
              <h2 className='text-3xl font-bold text-zinc-900'>{car.name}</h2>
              <p className='text-zinc-400'>
                <span className='font-semibold'>Model:</span> {car.model}
              </p>
              <div className='mt-6 w-full space-y-4'>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <PiEngine /> Engine
                    </h4>
                    <p className='font-normal'>{car.model}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <PiMotorcycle /> Motor type
                    </h4>
                    <p className='font-normal'>{car.motor_type?.name}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <Colorize /> Color
                    </h4>
                    <p className='font-normal'>{car.color}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <BsLightning /> Power
                    </h4>
                    <p className='font-normal'>{car.power}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <Category /> Type
                    </h4>
                    <p className='font-normal'>{car.type?.name}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <SiWorkplace /> Place number
                    </h4>
                    <p className='font-normal'>{car.place_number} persons</p>
                  </div>
                </div>
              </div>
              <Button className='mt-10' onClick={handleAppointmentClick}>
                Create an appointment
              </Button>
            </div>
          </div>
          <div className='mt-4 rounded-2xl bg-zinc-100 p-4 dark:bg-gray-900 md:mt-6 md:p-6'>
            <h3 className='text-2xl font-bold capitalize'>About the {car.name}</h3>
            <p className='text-zinc-700-400 mt-1.5 text-sm'>{car.description}</p>
            <div className='mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6'>
              <div className='w-full gap-2'>
                <h4 className='flex items-center gap-2 text-xl font-semibold text-zinc-600'>
                  <BsHammer />
                  Creator
                </h4>
                <p className='text-sm md:text-lg'>{car.brand?.name}</p>
              </div>
              <div className='w-full gap-2'>
                <h4 className='flex items-center gap-2 text-xl font-semibold text-zinc-600'>
                  <AiFillDollarCircle />
                  Price
                </h4>
                <p className='text-sm md:text-lg'>$ {car.price}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showDialog && (
        <div className='fixed inset-0 z-50'>
          <div className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
            <div className='inset-0 transition-opacity' aria-hidden='true'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            <span className='hidden sm:inline-block sm:h-screen sm:align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <div className='inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <div className='w-100 flex flex-col items-center justify-center sm:items-start'>
                  <div className='mt-3'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900' id='modal-title'>
                      Create Appointment
                    </h3>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>Please fill in the details to create an appointment.</p>
                    </div>
                  </div>

                  <form className='mt-10 grid w-full gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-2'>
                      <div>
                        <Label>First Name</Label>
                        <Input type='text' id='first_name' {...register('first_name')} />
                        {errors.first_name && <span className='text-xs'>this field should be more longer</span>}
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input type='text' id='last_name' {...register('last_name')} />
                        {errors.last_name && <span className='text-xs'>this should be more longer</span>}
                      </div>
                    </div>
                    <div className='grid gap-2'>
                      <Label>Email</Label>
                      <Input id='email' type='email' {...register('email')} />
                      {errors.email && <span className='text-xs'>this should be a valid email</span>}
                    </div>
                    <div className='grid gap-2'>
                      <Label>Contact</Label>
                      <Input id='contact' type='text' {...register('contact')} />
                      {errors.contact && <span className='text-xs'>this should be a valid phone number</span>}
                    </div>
                    <div className='grid gap-2'>
                      <Label>Date</Label>
                      <Input id='date' type='datetime-local' {...register('appointment_datetime')} />
                      {errors.appointment_datetime && <span> {errors.appointment_datetime.message} </span>}
                    </div>
                    <div className='grid gap-2'>
                      <Label>Enter your message</Label>
                      <Textarea id='message' rows={5} cols={10} className='resize-none' {...register('message')} />
                      {errors.message && <span className='text-xs'>message should be more longer</span>}
                    </div>
                    <Button type='submit' className='w-full'>
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
