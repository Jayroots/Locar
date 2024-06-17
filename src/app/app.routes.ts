import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VehiculeDetailsPageComponent } from './components/vehicule-details-page/vehicule-details-page.component';

import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { InscriptionPageComponent } from './components/inscription-page/inscription-page.component';

export const routes: Routes = [
    {path:"home", component: HomePageComponent},
    {path:'detailsVehicule/:id', component: VehiculeDetailsPageComponent},
    {path:'connexion', component: ConnexionPageComponent},
    {path:'inscription', component: InscriptionPageComponent},
    {path: "", redirectTo: "/home", pathMatch:"full"},
    {path: "**", component: PageNotFoundComponent}
];
