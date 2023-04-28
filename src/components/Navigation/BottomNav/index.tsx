'use client';

import { useRouter } from 'next/navigation';

import useMenuItems from '@/hooks/useMenuItems';

export default function BottomNav() {
  const router = useRouter();

  const menuItems = useMenuItems();

  return (
    <div className='ds-btm-nav flex md:hidden'>
      {menuItems && menuItems.length
        ? menuItems.map(({ name, icon, path }, index) => {
            return (
              <button key={index} onClick={() => router.push(path)}>
                {icon}
                <span className='ds-btm-nav-label'>{name}</span>
              </button>
            );
          })
        : null}
    </div>
  );
}
