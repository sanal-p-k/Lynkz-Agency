interface NavLink {
  id: string;
  title: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Lynkz Hub',
    path: '/',
  },
  {
    id: 'about',
    title: 'Behind Lynkz',
    path: '/about',
  },
  {
    id: 'services',
    title: 'Solutions we Lynk',
    path: '/services',
  },
  {
    id: 'portfolio',
    title: 'Lynkz in Action',
    path: '/portfolio',
  },
  {
    id: 'contact',
    title: 'Lynk Up',
    path: '/contact',
  },
];
