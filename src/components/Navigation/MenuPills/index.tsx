'use client';

import useMenuItems from '@/hooks/useMenuItems';

import MenuPillButton from '@/components/Buttons/MenuPillButton';
import Container from '@/components/Layouts/Container';

export default function MenuPills() {
  const menuItems = useMenuItems();

  return (
    <div className='bg-primary text-base-100 hidden py-4 md:block'>
      <Container>
        {menuItems && menuItems.length ? (
          <div className='flex items-center space-x-2'>
            {menuItems.map(({ name, icon, path }, index) => {
              return (
                <MenuPillButton
                  name={name}
                  icon={icon}
                  path={path}
                  key={index}
                />
              );
            })}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
