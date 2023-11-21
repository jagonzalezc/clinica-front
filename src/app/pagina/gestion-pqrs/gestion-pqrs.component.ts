import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoPqrs } from 'src/app/modelo/estado-pqrs';
import { ItemPqrsDTO } from 'src/app/modelo/item-pqrsdto';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
selector: 'app-gestion-pqrs',
templateUrl: './gestion-pqrs.component.html',
styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {
pqrs: ItemPqrsDTO[];
estado: EstadoPqrs[];
esAdmin: boolean = false;


constructor(private pacienteService: PacienteService, private tokenService: TokenService, private router: Router, 
    private administradorService: AdministradorService) {
  this.pqrs = [];
  this.obtenerPqrs();
  this.estado = [];
  }

  public obtenerPqrs() {
  let codigo = this.tokenService.getCodigo();
  
    this.pacienteService.listarPQRSPaciente(codigo).subscribe({
      next: data => {
      this.pqrs = data.respuesta;
      console.log(data);
      },
      error: error => {
        if (error.status === 403) {
          // Redirigir a la página de inicio de sesión u otra página no autorizada
          this.router.navigate(['/login']);
        } else {
          console.log(error);
        }
      }
      });
 
  }
  }