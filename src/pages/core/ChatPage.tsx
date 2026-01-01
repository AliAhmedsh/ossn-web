import { useParams } from 'react-router-dom';

export function ChatPage() {
  const { userId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Chat</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        Chat with user: <span className="font-semibold">{userId}</span>
      </div>
    </div>
  );
}
