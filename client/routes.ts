import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        //WELCOME
        path: 'home',
        loadChildren: 'client/modules/home/home.module#HomeModule'
    },
    {
        //VISUAL
        path: 'visual',
        loadChildren: 'client/modules/visual/visual.module#VisualModule'
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });