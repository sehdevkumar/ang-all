import { Route, RouterModule, Routes } from '@angular/router';
// I wanted to  go in deep of angular routing....
/* All router major routing APIs
1. path.
2. component.
3. loadChildren.
4. loadModule.
5. canActivate 
6. canChildrenActivate
7. resolver
8. pathMatch 
9. ??? how pass static params
10. Router
11. ActivatedRoute
12. Route 
13. QueryParams 
14. RouterLink 
15. Data 
16. Navigation Events
17. children
18. providers
19. redirectTo 
20. preloading  ??  RouterPreloader ?? Un Explored Domain 
*/

import { Component } from '@angular/core';

@Component({
    selector: 'app-router-api',
    standalone: true,
    template: `
        <div class="w-full h-full min-h-[calc(100vh-100px)] grid overflow-hidden bg-gray-100 border border-gray-300 grid-cols-[max-content,1fr]">
            <nav class="max-w-[200px] bg-white shadow-md p-4">
                <ul class="flex flex-col gap-2">
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="load-component">Load Component</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="load-children">Load Children (Lazy Loading)</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="protected-route">Protected Route</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="query-params">Query Params</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="pass-data">Pass Data</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="providers">Providers</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="preloading">Preloading (Lazy)</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="resolver">Resolver</a>
                    </li>
                    <li class="hover:text-blue-500 cursor-pointer">
                        <a routerLink="navigation-events">Navigation Events</a>
                    </li>
                </ul>
            </nav>

            <div class="container overflow-auto p-4">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    imports: [RouterModule],
    providers: []
})
export class RouterApisComponent {}




export const RouteAPis: Routes = [
  {
    path: '',
    component: RouterApisComponent,
    children: [
      {
        path: 'load-component',
        loadComponent: () =>
          import('./load-component').then((d) => d.LoadComponent),
      },
      
        {
        path: 'load-children',
        loadChildren: () =>
          import('./lazy-loaded-childrens').then((d) => d.routesLazyLoaded),
      }
    ],
  },
];
