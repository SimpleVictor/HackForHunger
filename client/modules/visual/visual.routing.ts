import { Routes, RouterModule } from '@angular/router';
import {VisualComponent} from "./visual.component";


export const routes: Routes = [
    { path: 'visual', component: VisualComponent}
];

export const routing = RouterModule.forChild(routes);