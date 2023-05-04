import clsx from 'clsx';
import { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { ImSpinner2 } from 'react-icons/im';

export type PasswordInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: React.HTMLInputTypeAttribute;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export default function PasswordInput({
  label,
  placeholder = '',
  helperText,
  id,
  readOnly = false,
  validation,
  loading,
  ...rest
}: PasswordInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className='ds-form-control w-full pb-4'>
      <label className='ds-label' htmlFor={id}>
        {label}
        {loading && (
          <span className='ds-label-text-alt'>
            <ImSpinner2 className='animate-spin' />
          </span>
        )}
      </label>
      <div className='relative mt-1'>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            'ds-input ds-input-primary w-full',
            errors[id] ? 'ds-input-error' : 'ds-input-bordered'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        <button
          onClick={togglePassword}
          type='button'
          className='absolute inset-y-0 right-0 mr-3 flex items-center rounded-lg p-0'
        >
          {showPassword ? (
            <HiEyeOff className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
          ) : (
            <HiEye className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
          )}
        </button>
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {errors[id] && (
          <span className='text-sm text-red-500'>
            {errors[id]?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
