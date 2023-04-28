'use client';

import { useRouter } from 'next/navigation';

interface IAuthButtonProps {
  name: string;
  href: string;
  ghost?: boolean;
}

export default function AuthButton({ name, href, ghost }: IAuthButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className={`ds-btn ds-btn-sm ${
        ghost
          ? 'ds-btn-ghost text-base-100 btn-md normal-case'
          : 'text-primary bg-base-100 hover:bg-base-100/80'
      }`}
    >
      {name}
    </button>
  );
}
