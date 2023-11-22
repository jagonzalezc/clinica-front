import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CitasDTO } from 'src/app/modelo/citas-dto';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css'],
  providers: [DatePipe]
})
export class ListarCitasComponent {
  citasDTO: CitasDTO[]=[];
  cita: number;

  constructor(private medicoServicio: MedicoService, private tokenService: TokenService){
    this.cita=0;
    this.listarCitas();

  }

  public listarCitas(){
    this.medicoServicio.listarCitas(this.tokenService.getCodigo()).subscribe({
      next: data => {
        console.log(data.respuesta);
      this.citasDTO = data.respuesta;
      },
      error: error => {
      console.log(error);
      }
      });
    }
  }
  

