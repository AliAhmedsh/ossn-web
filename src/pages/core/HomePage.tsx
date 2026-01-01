export function HomePage() {
  const quickActions = ['Create post', 'Start live video', 'Upload photos'];
  const stories = ['Alice • 5m', 'Bob • 12m', 'Carol • 20m'];
  const feed = [
    { author: 'Alice', text: 'Excited to join OSSN!', time: '2h' },
    { author: 'Bob', text: 'Who wants to pair on a side project?', time: '3h' },
    { author: 'Carol', text: 'Just launched my new portfolio 🎉', time: '6h' },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Home</h1>
      <p className="text-slate-600">Stories, quick actions, and feed entry point.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-2 text-sm font-semibold text-slate-800">Stories</div>
          <div className="flex gap-2">
            {stories.map((story) => (
              <div
                key={story}
                className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {story}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-2 text-sm font-semibold text-slate-800">Quick actions</div>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                type="button"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 text-sm font-semibold text-slate-800">Your feed</div>
        <div className="space-y-3">
          {feed.map((item) => (
            <div key={item.author + item.time} className="rounded-lg border border-slate-100 p-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-800">{item.author}</span>
                <span>{item.time}</span>
              </div>
              <p className="mt-1 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
