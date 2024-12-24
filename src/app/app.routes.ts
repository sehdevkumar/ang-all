import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        path: 'test-resolver',
        loadChildren: () => import('./test-route-resolver').then(m => m.TestRoutes)
    }

];
