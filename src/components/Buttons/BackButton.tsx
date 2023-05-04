'use client';

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

import usePreviousRoute from '@/hooks/usePreviousRoute';

export default function BackButton() {
  const router = useRouter();

  const previousRoute = usePreviousRoute();

  return (
    <button
      onClick={() => router.push(previousRoute)}
      className='ds-btn ds-btn-circle ds-btn-outline ds-btn-sm hover:bg-primary'
    >
      <BiArrowBack className='text-lg' />
    </button>
  );
}
