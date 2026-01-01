import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { HomePage } from '../pages/core/HomePage';
import { FeedPage } from '../pages/core/FeedPage';
import { MessagesPage } from '../pages/core/MessagesPage';
import { ChatPage } from '../pages/core/ChatPage';
import { NotificationsPage } from '../pages/core/NotificationsPage';
import { ProfilePage } from '../pages/core/ProfilePage';
import { EditProfilePage } from '../pages/core/EditProfilePage';
import { GroupsPage } from '../pages/core/GroupsPage';
import { GroupDetailPage } from '../pages/core/GroupDetailPage';
import { CreateGroupPage } from '../pages/core/CreateGroupPage';
import { PhotosPage } from '../pages/core/PhotosPage';
import { AlbumDetailPage } from '../pages/core/AlbumDetailPage';
import { FriendsPage } from '../pages/core/FriendsPage';
import { SearchPage } from '../pages/core/SearchPage';
import { SettingsPage } from '../pages/core/SettingsPage';
import { CreatePostPage } from '../pages/core/CreatePostPage';
import { PostDetailPage } from '../pages/core/PostDetailPage';
import { Guard } from './routesGuard';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    element: (
      <Guard>
        <AppLayout />
      </Guard>
    ),
    children: [
      { path: '/', element: <Navigate to="/home" replace /> },
      { path: '/home', element: <HomePage /> },
      { path: '/feed', element: <FeedPage /> },
      { path: '/messages', element: <MessagesPage /> },
      { path: '/messages/:userId', element: <ChatPage /> },
      { path: '/notifications', element: <NotificationsPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/profile/edit', element: <EditProfilePage /> },
      { path: '/user/:username', element: <ProfilePage /> },
      { path: '/groups', element: <GroupsPage /> },
      { path: '/groups/:groupId', element: <GroupDetailPage /> },
      { path: '/groups/create', element: <CreateGroupPage /> },
      { path: '/photos', element: <PhotosPage /> },
      { path: '/photos/:albumId', element: <AlbumDetailPage /> },
      { path: '/friends', element: <FriendsPage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/create-post', element: <CreatePostPage /> },
      { path: '/post/:postId', element: <PostDetailPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/home" replace /> },
]);
