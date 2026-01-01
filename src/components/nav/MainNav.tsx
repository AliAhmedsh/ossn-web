import { NavLink } from 'react-router-dom';
import { HomeIcon, NewspaperIcon, ChatBubbleLeftRightIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const items = [
  { to: '/home', label: 'Home', icon: HomeIcon },
  { to: '/feed', label: 'Feed', icon: NewspaperIcon },
  { to: '/messages', label: 'Messages', icon: ChatBubbleLeftRightIcon },
  { to: '/notifications', label: 'Notifications', icon: BellIcon },
  { to: '/profile', label: 'Profile', icon: UserCircleIcon },
];

export function MainNav() {
  return (
    <aside className="w-60 border-r border-slate-200 bg-white/80 backdrop-blur">
      <div className="px-4 py-5 text-xs font-semibold uppercase tracking-wide text-slate-500">Navigation</div>
      <nav className="space-y-1 px-3 pb-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition',
                isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100',
              ].join(' ')
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
