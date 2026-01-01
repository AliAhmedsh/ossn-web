import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: call backend forgot password endpoint
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Reset password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter the email associated with your account and we&apos;ll send reset instructions.
        </p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Send reset link
          </button>
        </form>
        {submitted && (
          <div className="mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
            If an account exists, a reset link has been sent.
          </div>
        )}
        <div className="mt-4 text-sm text-slate-600">
          <Link to="/login" className="text-brand-700 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
