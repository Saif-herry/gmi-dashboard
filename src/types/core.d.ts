type UserType = {
  avatar: string;
  avatarPath: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  fcmToken: {
    web: string;
    android: string;
    ios: string;
  };
  id: string;
  isBlocked: boolean;
  isVerified: boolean;
  lastLogin: string;
  name: string;
  role: 'admin' | 'user';
};