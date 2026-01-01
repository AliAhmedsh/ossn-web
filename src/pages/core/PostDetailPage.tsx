import { useParams } from 'react-router-dom';

export function PostDetailPage() {
  const { postId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Post Detail</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        Post ID: <span className="font-semibold">{postId}</span>
      </div>
    </div>
  );
}
