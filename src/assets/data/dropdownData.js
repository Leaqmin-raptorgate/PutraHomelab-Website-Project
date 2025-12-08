import path from 'node:path'

export const navItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Articles',
    path: '/articles'
  },
  {
    name: 'Categories',
    path: '#',
    children: [
      { name: 'Linux', path: '/articles/linux' },
      { name: 'Hardware', path: '/articles/hardware' },
      { name: 'Networking', path: '/articles/network' },
      { name: 'Self-Hosting', path: '/articles/self-hosting' },
      { name: 'Case Studies', path: '#' }
    ]
  },
  {
    name: 'About',
    path: '/about'
  }
]
