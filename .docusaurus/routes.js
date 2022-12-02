import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rabid-backoffice-docs/markdown-page',
    component: ComponentCreator('/rabid-backoffice-docs/markdown-page', 'ad0'),
    exact: true
  },
  {
    path: '/rabid-backoffice-docs/',
    component: ComponentCreator('/rabid-backoffice-docs/', '9fa'),
    routes: [
      {
        path: '/rabid-backoffice-docs/',
        component: ComponentCreator('/rabid-backoffice-docs/', '34d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/admin-manual/athletes',
        component: ComponentCreator('/rabid-backoffice-docs/admin-manual/athletes', 'b5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/admin-manual/dashboard',
        component: ComponentCreator('/rabid-backoffice-docs/admin-manual/dashboard', 'ef6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/admin-manual/nft',
        component: ComponentCreator('/rabid-backoffice-docs/admin-manual/nft', '263'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/admin-manual/transactions',
        component: ComponentCreator('/rabid-backoffice-docs/admin-manual/transactions', 'dfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/admin-manual/whitelist',
        component: ComponentCreator('/rabid-backoffice-docs/admin-manual/whitelist', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rabid-backoffice-docs/category/rabid-admin-manual',
        component: ComponentCreator('/rabid-backoffice-docs/category/rabid-admin-manual', '835'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
