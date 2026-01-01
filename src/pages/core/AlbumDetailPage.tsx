import { useParams } from 'react-router-dom';

export function AlbumDetailPage() {
  const { albumId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Album Detail</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        Album ID: <span className="font-semibold">{albumId}</span>
      </div>
    </div>
  );
}
