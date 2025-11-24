export const navItems = [
  { 
    name: 'Articles', 
    path: '/articles' 
  },
  { 
    name: 'Categories', 
    path: '#', 
    children: [
      { name: 'Networking', path: '#' },
      { name: 'Hardware', path: '#' },
      { name: 'Self-Hosting', path: '#' },
      { name: 'Case Studies', path: '#' }
    ]
  },
  { 
    name: 'About', 
    path: '/about' 
  }
]