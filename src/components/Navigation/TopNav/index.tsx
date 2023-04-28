import AppLogo from '@/components/AppLogo';
import AuthButton from '@/components/Buttons/AuthButton';
import Container from '@/components/layouts/Container';
import LocationSelector from '@/components/Navigation/TopNav/LocationSelector';

import { AUTH_REGISTER } from '@/constants/routes';

export default function TopNav() {
  return (
    <div className='bg-primary'>
      <Container>
        <div className='ds-navbar bg-primary text-base-100 p-0'>
          <div className='flex-1'>
            <AppLogo />
          </div>
          <div className='flex-none'>
            <div className='flex items-center space-x-2'>
              <LocationSelector />
              <div className='hidden md:flex'>
                <AuthButton name='Add your tour' ghost href={AUTH_REGISTER} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
