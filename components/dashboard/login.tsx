import Image from 'next/image';
import Link from 'next/link';
import { useLogin, useNotify } from 'ra-core';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const login = useLogin();
  const notify = useNotify();
  const { toast } = useToast();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email, password });
    } catch (error) {
      notify('Invalid email or password');
      toast({
        title: 'Wrong email and password',
        description: 'Please provide the right email and password',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[550px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-5xl font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to vaika admin dashboard
            </p>
          </div>
          <form onSubmit={handleSubmit} className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                type='password'
                required
              />
            </div>
            <Button type='submit' className='w-full rounded-lg py-7' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </form>
          <Link href={'/home'} className='text-center text-zinc-400 underline transition-all hover:text-zinc-900'>
            Return to home page
          </Link>
        </div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <Image
          src='/placeholder.webp'
          alt='Image'
          width='1920'
          height='1080'
          priority
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
}
