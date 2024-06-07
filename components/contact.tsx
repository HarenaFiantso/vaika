import { sendEmail } from '@/services/sendEmail';
import { useForm } from 'react-hook-form';

import CustomButton from '@/components/customButton';

export default function Contact() {
  'use client';
  const { register } = useForm();

  return (
    <form
      action={async (formData) => {
        await sendEmail(formData);
      }}
      className="className='relative mx-auto mt-12 w-full max-w-[1440px] p-4 md:p-16"
    >
      <h1 className='bg-gradient-radial from-[#456efd] to-[#00377b,#017cd0] bg-clip-text text-2xl font-bold text-transparent dark:text-white md:text-4xl'>
        Contact Us
      </h1>
      <p className='mt-2 text-sm text-gray-700 dark:text-white md:text-lg'>Contact us for more information</p>
      <div className='bg-blue mt-10 w-[100%]'>
        <label className='text-sm text-white'>Name</label>
        <input
          {...register('name')}
          type='text'
          name='name'
          className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
        />
      </div>
      <div className='bg-blue mt-5 w-[100%]'>
        <label className='text-sm text-white'>Email</label>
        <input
          {...register('email')}
          type='email'
          name='email'
          className='h-[2rem] w-[100%] rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
        />
      </div>
      <div className='bg-blue mt-5 w-[100%]'>
        <label className='text-sm text-white'>Message</label>
        <textarea
          {...register('message')}
          name='message'
          className='w-[100%] resize-none rounded-[7px] bg-[#fbfbfb29] p-2 outline-none'
          cols={15}
          rows={5}
        />
      </div>
      <CustomButton
        title='Submit'
        type='submit'
        containerStyle=' mx-left mt-[1rem] w-[30%] bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
      />
    </form>
  );
}
