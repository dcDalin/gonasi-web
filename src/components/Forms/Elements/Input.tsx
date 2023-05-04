import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

export type InputProps = {
  autocomplete?: string;
  label: string;
  id: string;
  placeholder?: string;
  loading?: boolean;
  type?: React.HTMLInputTypeAttribute;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  autocomplete,
  label,
  placeholder = '',
  loading,
  id = '',
  type = 'text',
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='ds-form-control w-full pb-0'>
      <label className='ds-label' htmlFor={id}>
        <span className='ds-label-text text-base'>{label}</span>
        {loading && (
          <span className='ds-label-text-alt'>
            <ImSpinner2 className='animate-spin' />
          </span>
        )}
      </label>
      <input
        {...register(id, validation)}
        {...rest}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        aria-describedby={id}
        autoComplete={autocomplete}
        className={clsx(
          'ds-input ds-input-primary w-full',
          errors[id] ? 'ds-input-error' : 'ds-input-bordered'
        )}
        disabled={readOnly}
      />
      <label className='ds-label'>
        {!hideError && errors[id]?.message ? (
          <span className='ds-label-text-alt text-error text-sm'>
            {`${errors[id]?.message}`}
          </span>
        ) : null}
      </label>
    </div>
  );
}
