'use client';

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

import { PREVIOUS_ROUTE } from '@/constants/localStorage';

export default function BackButton() {
  const router = useRouter();

  const previousRoute = localStorage.getItem(PREVIOUS_ROUTE) || '/';
  return (
    <button
      onClick={() => router.push(previousRoute)}
      className='ds-btn ds-btn-circle ds-btn-outline ds-btn-sm hover:bg-primary'
    >
      <BiArrowBack className='text-lg' />
    </button>
  );
}
