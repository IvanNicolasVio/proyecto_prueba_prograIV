import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Error } from './componentes/error/error';
import { About } from './componentes/about/about';
import { Contact } from './componentes/contact/contact';
import { Login } from './componentes/login/login';
import { Register } from './componentes/register/register';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path:'contact',
        component: Contact
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'register',
        component: Register
    },
    {
        path: '**',
        component: Error
    }
];
