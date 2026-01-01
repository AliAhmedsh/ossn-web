import { Link } from 'react-router-dom';

export function MessagesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Messages</h1>
        <Link to="/messages/123" className="text-sm text-brand-700 hover:underline">
          Open chat
        </Link>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        Conversations list placeholder
      </div>
    </div>
  );
}
