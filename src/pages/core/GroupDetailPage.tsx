import { useParams } from 'react-router-dom';

export function GroupDetailPage() {
  const { groupId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Group Detail</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        Group ID: <span className="font-semibold">{groupId}</span>
      </div>
    </div>
  );
}
