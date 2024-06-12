'use client';

import { sendEmail } from '@/services/send-email';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const result = await sendEmail(formData);

    if (result.success) {
      toast({
        type: 'foreground',
        title: 'Email sent successfully',
        description: 'Your message is received by admin successfully',
        color: 'green',
      });

      // @ts-ignore
      formRef.current!.reset();
    } else {
      toast({
        type: 'background',
        title: 'Email not sent',
        description: 'There is an error while sending email',
        color: 'red',
      });
    }

    setIsLoading(false);
  };

  return (
    <Card className='m-auto w-1/2'>
      <CardHeader>
        <CardTitle className='text-xl'>Contact us</CardTitle>
        <CardDescription className='text-zinc-500'>
          If you want a better information, please contact us by completing the following forms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className='grid gap-4'>
          <div className='grid gap-2'>
            <Label>Name</Label>
            <Input id='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='grid gap-2'>
            <Label>Email</Label>
            <Input id='email' type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='grid gap-2'>
            <Label>Message</Label>
            <Textarea
              id='message'
              rows={5}
              cols={10}
              className='resize-none'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
