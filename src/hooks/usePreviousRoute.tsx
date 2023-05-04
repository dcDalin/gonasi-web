import { PREVIOUS_ROUTE } from '@/constants/localStorage';

export default function usePreviousRoute() {
  let previousRoute = '/';

  if (typeof window !== 'undefined') {
    previousRoute = localStorage.getItem(PREVIOUS_ROUTE) || '/';
  }

  return previousRoute;
}
