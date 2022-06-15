
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/spectralink',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/importarSpectralink.vue') }
    ]
  },
  {
    path: '/inventariDTIC',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/importarInventariDTIC.vue') }
    ]
  },
  {
    path: '/stock',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/importarStock.vue') }
    ]
  },
  {
    path: '/comparar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/comparativa.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
