import Image from 'next/image';
import { ImLocation } from 'react-icons/im';

import MenuPillButton from '@/components/Buttons/MenuPillButton';

export default function LocationSelector() {
  return (
    <MenuPillButton
      name='Naivasha'
      icon={<ImLocation />}
      iconLast={
        <Image
          src='/images/kenya-flag-icon.svg'
          alt='kenya flag icon'
          width='22'
          height='22'
        />
      }
      path=''
    />
  );
}
