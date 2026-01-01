const posts = [
  {
    id: '1',
    author: 'Alice',
    role: 'Designer',
    time: '2h ago',
    content: 'Just wrapped up a new onboarding flow. Excited to ship soon!',
    likes: 18,
    comments: 4,
  },
  {
    id: '2',
    author: 'Bob',
    role: 'Frontend',
    time: '4h ago',
    content: 'Anyone tried the new Tailwind v4 preview? Impressions?',
    likes: 12,
    comments: 7,
  },
  {
    id: '3',
    author: 'Carol',
    role: 'DevRel',
    time: '1d ago',
    content: 'Running a live stream this Friday on OSS security best practices. Drop questions!',
    likes: 30,
    comments: 11,
  },
];

export function FeedPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Feed</h1>
        <button className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
          Create post
        </button>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <article key={post.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-900">{post.author}</span>
                <span className="text-slate-400"> • {post.role}</span>
              </div>
              <span>{post.time}</span>
            </div>
            <p className="mt-2 text-sm text-slate-800">{post.content}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
              <button className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-slate-100" type="button">
                👍 {post.likes}
              </button>
              <button className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-slate-100" type="button">
                💬 {post.comments}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
