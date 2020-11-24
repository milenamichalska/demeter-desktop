import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Overview',
    icon: 'activity-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Map View',
    icon: 'map-outline',
    link: '/pages/growth',
  },
  {
    title: 'Tasks',
    icon: 'alert-circle-outline',
    link: '/pages/tasks',
  },
  {
    title: 'Predictions',
    icon: 'bar-chart-2-outline',
    link: '/pages/predictions',
  },
  {
    title: 'User options',
    group: true,
  },
  {
    title: 'Profile Settings',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
