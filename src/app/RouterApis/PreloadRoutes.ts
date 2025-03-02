import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { PreloadChild } from './PreloadChild';
import { inject } from '@angular/core';

export const PreloadRoutes: Routes = [
  {
    path: '',
    component: PreloadChild,
    children: [
      {
        path: 'p1',
        data: {
          preload: true,
          delay: 3000,
        },

        loadComponent: () =>
          import('./GrandChild').then((d) => d.GrandChildComponent),
      },
      {
        path: 'p2',
        resolve: {
          data: (r: ActivatedRouteSnapshot, s: RouterStateSnapshot) => {
            return new Promise<void>((resolve) => {
              setTimeout(() => {            
                resolve();
              }, 4000);
            });
          },
        },
        data: {
          preload: true,
          delay: 10000,
        },

        loadComponent: () =>
          import('./GrandChild').then((d) => d.GrandChildComponent),
      },
      {
        path: 'p3',
        data: {
          delay: 2000,
          preload: true,
        },

        loadComponent: () =>
          import('./GrandChild').then((d) => d.GrandChildComponent),
      },
    ],
  },
];
