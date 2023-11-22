import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { LoginComponent } from './pagina/login/login.component';
import { FormsModule } from '@angular/forms';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { ListarCitasComponent } from './pagina/listar-citas/listar-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    DetallePqrsComponent,
    AlertaComponent,
    ListarCitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }