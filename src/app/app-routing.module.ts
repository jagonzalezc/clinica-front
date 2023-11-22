import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { ListarCitasComponent } from './pagina/listar-citas/listar-citas.component';

const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
    { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
    { path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
    { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente", "admin"] } },
    { path: "atender-cita", component: GestionPqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["medico"] } },
    { path: "crear-medico", component: GestionPqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["admin"] } },
    { path: "listar-citas", component: ListarCitasComponent, canActivate: [RolesGuard], data: { expectedRole: ["medico"] } },
    { path: "", component: InicioComponent },
    { path: "index", component: InicioComponent },
    { path: "**", redirectTo: "" },
  ];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }