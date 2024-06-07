import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"home", component: HomePageComponent},
    {path: "", redirectTo: "/home", pathMatch:"full"},
    {path: "**", component: PageNotFoundComponent}
];
