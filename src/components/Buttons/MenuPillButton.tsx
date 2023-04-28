'use client';

import { useRouter } from 'next/navigation';

interface IMenuPillButtonProps {
  name: string;
  icon: JSX.Element;
  iconLast?: JSX.Element;
  path: string;
}

export default function MenuPillButton({
  name,
  icon,
  iconLast,
  path,
}: IMenuPillButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      className='ds-btn ds-btn-sm ds-btn-outline text-base-100 hover:bg-base-100 hover:text-primary rounded-full'
    >
      <div className='flex items-center space-x-2'>
        <span>{icon}</span>
        <span>{name}</span>
        {iconLast ? <span>{iconLast}</span> : null}
      </div>
    </button>
  );
}
