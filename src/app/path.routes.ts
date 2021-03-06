import { RouterModule, Routes } from '@angular/router';

// components
import { ClienteComponent } from './cliente/cliente.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const ROUTING = RouterModule.forRoot(ROUTES);