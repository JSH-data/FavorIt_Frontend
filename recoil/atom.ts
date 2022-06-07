import { atom } from 'recoil';

export const isTopNavigation = atom<boolean>({
  key: 'isTopNavigation',
  default: true,
});


export const isBottomNavigation = atom<boolean>({
  key: 'isBottomNavigation',
  default: false,
});
