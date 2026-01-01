import { Link } from 'react-router-dom';

export function GroupsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Groups</h1>
        <Link to="/groups/create" className="text-sm text-brand-700 hover:underline">
          Create group
        </Link>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">Groups list placeholder</div>
    </div>
  );
}
