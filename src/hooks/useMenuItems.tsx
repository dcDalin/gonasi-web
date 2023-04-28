import { BsBusFront } from 'react-icons/bs';
import { VscPackage } from 'react-icons/vsc';

import { HOME, PACKAGES } from '@/constants/routes';

export default function useMenuItems() {
  const menuPillsData = [
    {
      name: 'Tours',
      icon: <BsBusFront />,
      path: HOME,
    },
    {
      name: 'Packages',
      icon: <VscPackage />,
      path: PACKAGES,
    },
  ];

  return menuPillsData;
}
