import { Navigate, useLocation } from 'react-router-dom';
import { authStore } from '../state/authStore';
import { useSyncExternalStore } from 'react';

export function Guard({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const state = useSyncExternalStore(
    authStore.subscribe,
    authStore.getState,
    authStore.getState,
  );

  if (!state.accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
