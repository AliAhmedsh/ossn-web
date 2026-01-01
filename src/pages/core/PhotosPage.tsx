import { Link } from 'react-router-dom';

export function PhotosPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Photos</h1>
        <Link to="/photos/album-1" className="text-sm text-brand-700 hover:underline">
          View album
        </Link>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">Photos grid placeholder</div>
    </div>
  );
}
