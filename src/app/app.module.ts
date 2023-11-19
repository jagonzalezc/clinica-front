import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { LoginComponent } from './pagina/login/login.component';
import { FormsModule } from '@angular/forms';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
