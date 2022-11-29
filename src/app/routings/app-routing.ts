import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const APP_ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'builddream',loadChildren:()=> import('./builddream-routing').then(mod => mod.BUILDDREAMS_ROUTES)},
  {path:'',redirectTo:'home',pathMatch:'full'}
]; 

