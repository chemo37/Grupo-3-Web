import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { UserPlatformComponent } from "./pages/user-platform/user-platform.component";
import { RegisterComponent } from "./pages/register/register.component";
import { IntranetComponent } from "./pages/intranet/intranet.component";
import { BienvenidosComponent } from "./pages/bienvenidos/bienvenidos.component";
import { RegistroInfraccionComponent } from "./pages/registro-infraccion/registro-infraccion.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'intranet', component: IntranetComponent },
    { path: 'userplatform', component: UserPlatformComponent },
    { path: 'bienvenidos' , component: BienvenidosComponent},
    { path: 'registro-infraccion' , component: RegistroInfraccionComponent},
    { path: 'register', component: RegisterComponent }    
];

@NgModule({
    imports: [RouterModule. forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}