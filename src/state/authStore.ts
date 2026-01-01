import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  name: string;
  email: string;
  username?: string;
  avatarUrl?: string;
};

type AuthState = {
  user?: User;
  accessToken?: string;
  refreshToken?: string;
  isLoading: boolean;
  error?: string;
  setTokens: (access: string, refresh?: string) => void;
  setUser: (user?: User) => void;
  setError: (err?: string) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
};

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      isLoading: false,
      error: undefined,
      setTokens: (access, refresh) =>
        set({
          accessToken: access,
          refreshToken: refresh,
          error: undefined,
        }),
      setUser: (user) => set({ user }),
      setError: (error) => set({ error }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () =>
        set({
          user: undefined,
          accessToken: undefined,
          refreshToken: undefined,
          isLoading: false,
          error: undefined,
        }),
    }),
    {
      name: 'ossn-auth',
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
);
