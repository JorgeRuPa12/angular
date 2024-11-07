import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

//Necesitamos una serie de modulos que se encuentran dentro de angular para la navegacion de rutas
import { Routes, RouterModule, Router } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NumeroDobleComponent } from "./components/numero-doble/numero-doble.component";
import { TablaMultiplicarComponent } from "./components/tabla-multiplicar/tabla-multiplicar.component";

//Necesitamos un array con las rutas, dicho array sera del tipo Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "numerodoble", component: NumeroDobleComponent},
    { path: "numerodoble/:numero", component: NumeroDobleComponent},
    { path: "tablamultiplicar/:numero", component: TablaMultiplicarComponent},
    { path: "**", component: NotfoundComponent},

]

//Desde esta clase debemos exportar el array de rutas como proveedor
export const appRoutingProvider: any[] = [];
//Las rutas en si mismas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)