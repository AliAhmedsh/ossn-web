export const apiConfig = {
  baseUrl: 'http://localhost:8080',
  apiVersion: '/api/v1',
};

export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
    validate: '/auth/validate',
    logout: '/auth/logout',
    forgotPassword: '/password/forgot',
    resetPassword: '/password/reset',
    changePassword: '/password/change',
  },
  backend: {
    profile: '/backend/profile',
    dashboard: '/backend/dashboard',
    posts: {
      feed: '/backend/posts/feed',
      user: '/backend/posts/user',
      create: '/backend/posts',
      byId: '/backend/posts',
      delete: '/backend/posts',
      like: (id: string) => `/backend/posts/${id}/like`,
      comments: (postId: string) => `/backend/posts/${postId}/comments`,
    },
    comments: {
      delete: '/backend/comments',
    },
    friends: '/backend/friends',
    friendRequests: '/backend/friends/requests',
    messages: {
      conversations: '/backend/messages/conversations',
      list: '/backend/messages',
    },
    notifications: '/backend/notifications',
    notificationReadAll: '/backend/notifications/read-all',
    notificationCount: '/backend/notifications/unread-count',
    groups: '/backend/groups',
    photos: '/backend/photos',
    albums: '/backend/albums',
  },
  users: {
    me: '/users/me',
    update: '/users/me',
    byId: '/users',
    search: '/users/search',
  },
};

export const apiBaseUrl = `${apiConfig.baseUrl}${apiConfig.apiVersion}`;
