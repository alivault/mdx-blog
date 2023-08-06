'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import Link from 'next/link';
import { Loader } from 'lucide-react';

export function MessageForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [number1, setNumber1] = useState<number | null>(null);
  const [number2, setNumber2] = useState<number | null>(null);

  useEffect(() => {
    setNumber1(Math.floor(Math.random() * 11));
    setNumber2(Math.floor(Math.random() * 11));
  }, []);

  const formSchema = z.object({
    email: z
      .string()
      .email({ message: 'Please provide a valid email address.' }),
    message: z.string().nonempty({ message: 'A message is required.' }),
    verification: z
      .string()
      .refine(
        str =>
          number1 !== null &&
          number2 !== null &&
          parseInt(str, 10) === number1 + number2,
        {
          message: `Please answer the verification question correctly.`,
        }
      ),
    formError: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
      verification: '',
      formError: '',
    },
  });

  const { setError, clearErrors, setValue } = form;

  const watchedEmail = form.watch('email');
  const watchedMessage = form.watch('message');

  useEffect(() => {
    clearErrors('formError');
  }, [watchedEmail, watchedMessage, clearErrors]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.error) {
      setError('formError', {
        message:
          'An error occurred while sending your message. Please try again later.',
      });
    } else {
      setSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <section className='flex flex-col gap-4'>
        <h1 className='rounded-lg bg-green-600 p-5 text-center text-xl font-bold text-white'>
          Thank you for your message. I will respond soon.
        </h1>
        <div className='flex'>
          <Link href='/' className='text-link hover:underline'>
            ← Back to Home
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className='flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Message</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, errors => {
              if (errors.verification) {
                setValue('verification', '');
              }
              setNumber1(Math.floor(Math.random() * 11));
              setNumber2(Math.floor(Math.random() * 11));
            })}
            className='flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder='Your message' {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.formError &&
                      form.formState.errors.formError.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='verification'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2'>
                    Anti-spam verification:{' '}
                    {number1 !== null && number2 !== null ? (
                      `${number1} + ${number2} = ?`
                    ) : (
                      <Loader className='h-3 w-3 animate-spin' />
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>
      </section>
    );
  }
}
