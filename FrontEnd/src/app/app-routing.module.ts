import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SiginComponent } from './modules/sigin/sigin.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { RedactarComponent } from './modules/redactar/redactar.component';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [
    {path:'', redirectTo:'/welcome', pathMatch:'full'},
    {path: 'iniciar-sesion', component:LoginComponent},
    {path: 'registrarse', component:SiginComponent},
    {path: 'welcome', component:WelcomeComponent},
    {path: 'redactar', component:RedactarComponent},
    {path: 'inicio', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
