interface ISubmitButtonProps {
  name?: string;
}

export default function SubmitButton({ name = 'Submit' }: ISubmitButtonProps) {
  return (
    <button className='ds-btn-primary ds-btn-block ds-btn my-6' type='submit'>
      {name}
    </button>
  );
}
