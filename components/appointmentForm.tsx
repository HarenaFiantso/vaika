'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AppointmentFormData, Appointment } from "@/constants"
import { CarCardInfoSkeleton } from "./skeleton"
import CustomButton from "./customButton"

export default function AppointmentForm(){
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<AppointmentFormData>({resolver: zodResolver(Appointment)});
      const onSubmit: SubmitHandler<AppointmentFormData> = (data) => console.log(data);

    return(
        <section  id='appointment' className="mt-3 flex flex-col px-20 gap-5 md:flex-row">
            <div className="h-[100%] w-full md:w-[45%]">
                <CarCardInfoSkeleton />
            </div>
            <div className="w-full md:w-[70%] ">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[100%] md:w-[80%] mx-auto p-7'>
                    <h1 className="text-2xl pb-2 text-blue-600"> Appointment </h1>
                    <p className="pb-5 text-xs">Please complete these following fields to take an appointment</p>
                    <div className='flex flex-col w-[100%] gap-2 justify-between md:flex-row pb-2'>
                        <div className="bg-red w-[100%]">
                            <label className='text-white text-sm'>Firstname</label>
                            <input className='w-[100%] bg-[#fbfbfb29] outline-none h-[2rem] rounded-[7px] p-2' {...register('firstname')} />
                        {errors.firstname && <span className="text-xs">this field should be more longer</span>}
                        </div>

                        <div className="bg-blue w-[100%]">
                            <label className='text-white text-sm'>Lastname</label>
                            <input className='w-[100%] bg-[#fbfbfb29] outline-none h-[2rem] rounded-[7px] p-2' {...register('lastname')} />
                            {errors.lastname && <span className="text-xs">this should be more longer</span>}
                        </div>
                    </div>

                    <div className="pb-2">
                        <label className='text-white text-sm'>Email</label>
                        <input className='w-[100%] bg-[#fbfbfb29] outline-none h-[2rem] rounded-[7px] p-2' {...register('email')} />
                        {errors.email && <span className="text-xs">this should be a valid email</span>}
                    </div>

                    <div className="pb-2">
                        <label className='text-white text-sm'>Contact</label>
                        <input className='w-[100%] bg-[#fbfbfb29] outline-none h-[2rem] rounded-[7px] p-2' {...register('contact')} />
                        {errors.contact && <span className="text-xs">this should be a valid phone number</span>}
                    </div>

                    <div className="pb-2">
                        <label className='text-white text-sm'>Date</label>
                        <input className='w-[100%] bg-[#fbfbfb29] outline-none h-[2rem] rounded-[7px] p-2' type="datetime-local" {...register('appointmentDateTime')} />
                        {errors.appointmentDateTime && <span> {errors.appointmentDateTime.message} </span>}
                    </div>

                    <div>
                        <label className='text-white text-sm'>Message</label>
                        <textarea className="w-[100%] bg-[#fbfbfb29] outline-none rounded-[7px] p-2" {...register('message')} />
                        {errors.message && <span className="text-xs">message should be more longer</span>}
                    </div>

                    <CustomButton
                    title='Submit'
                    type='submit'
                    containerStyle=' mx-left mt-[1rem] w-[30%] bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
                  />

                </form>
            </div>
        </section>
    )
}