'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import SubmitButton from '@/components/Buttons/SubmitButton';
import Input from '@/components/Forms/Elements/Input';
import PasswordInput from '@/components/Forms/Elements/PasswordInput';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormProvider() {
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    return data;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-0'>
        <Input
          id='email'
          label='Email'
          placeholder='email@address.com'
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <PasswordInput
          id='password'
          label='Password'
          type='password'
          placeholder='**********'
          validation={{
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters',
            },
            required: 'Password is required',
          }}
        />

        <SubmitButton name='login' />
      </form>
    </FormProvider>
  );
}
