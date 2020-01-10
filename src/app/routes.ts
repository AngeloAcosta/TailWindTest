import { Routes } from '@angular/router';

import { NavbarComponent } from './header/navbar.component';

export const appRoutes: Routes = [
    { path: 'main', component: NavbarComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full'}
];
