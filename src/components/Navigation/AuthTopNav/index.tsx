import AppLogo from '@/components/AppLogo';
import BackButton from '@/components/Buttons/BackButton';

export default function AuthTopNav() {
  return (
    <div className='navbar bg-base-100 border-b-2'>
      <div className='grid grid-cols-3 items-center p-4'>
        <BackButton />
        <div className='flex items-center justify-center'>
          <AppLogo />
        </div>
        <div></div>
      </div>
    </div>
  );
}
