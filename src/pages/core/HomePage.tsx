export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Home</h1>
      <p className="text-slate-600">Stories, quick actions, and feed entry point.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">Stories placeholder</div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">Create post card</div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">Feed list placeholder</div>
    </div>
  );
}
