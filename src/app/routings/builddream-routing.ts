import { Route } from "@angular/router";
import { BuilddreamComponent } from "../builddream/builddream.component";
import { DreamHomeComponent } from "../dream-home/dream-home.component";

export const BUILDDREAMS_ROUTES: Route[] = [
    {path: '', component: BuilddreamComponent}, 
    {path:'home',component:DreamHomeComponent}
]; 