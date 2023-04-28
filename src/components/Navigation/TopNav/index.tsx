import AppLogo from '@/components/AppLogo';
import AuthButton from '@/components/Buttons/AuthButton';
import Container from '@/components/layouts/Container';

import { AUTH_LOGIN, AUTH_REGISTER } from '@/constants/routes';

export default function TopNav() {
  return (
    <div className='bg-primary'>
      <Container>
        <div className='ds-navbar bg-primary text-base-100 p-0'>
          <div className='flex-1'>
            <AppLogo />
          </div>
          <div className='flex-none'>
            <div className='hidden items-center space-x-2 md:flex'>
              <AuthButton name='Add your tour' ghost href={AUTH_REGISTER} />
              <AuthButton name='register' href={AUTH_REGISTER} />
              <AuthButton name='login' href={AUTH_LOGIN} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
