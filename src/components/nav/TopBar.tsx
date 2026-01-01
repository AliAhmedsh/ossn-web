import { Link } from 'react-router-dom';
import { authStore } from '../../state/authStore';
import { useSyncExternalStore } from 'react';

export function TopBar() {
  const state = useSyncExternalStore(
    authStore.subscribe,
    authStore.getState,
    authStore.getState,
  );

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur">
      <Link to="/home" className="text-lg font-semibold text-brand-700">
        OSSN Web
      </Link>
      <div className="flex items-center gap-3 text-sm">
        {state.user ? (
          <>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-brand-500/10 text-brand-700 flex items-center justify-center font-semibold">
                {state.user.name?.[0] ?? 'U'}
              </div>
              <div className="leading-tight">
                <div className="font-medium">{state.user.name}</div>
                <div className="text-slate-500 text-xs">{state.user.email}</div>
              </div>
            </div>
            <button
              className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-100"
              onClick={() => authStore.getState().logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="rounded-md bg-brand-600 px-3 py-1.5 text-white shadow-sm hover:bg-brand-700"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
