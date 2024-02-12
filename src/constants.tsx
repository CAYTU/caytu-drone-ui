import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Drones',
    path: '/drones',
    icon: <Icon icon="mingcute:drone-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/drones' },
      { title: 'UAV 1', path: '/drones/uav-1' },
      { title: 'UAV 2', path: '/drones/uav-2' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
