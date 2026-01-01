import { Outlet } from 'react-router-dom';
import { MainNav } from '../nav/MainNav';
import { TopBar } from '../nav/TopBar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopBar />
      <div className="flex">
        <MainNav />
        <main className="flex-1 px-6 pb-10 pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
