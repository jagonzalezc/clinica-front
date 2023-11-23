import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCitaMedicaDTO } from 'src/app/modelo/item-cita-medica-dto';
import { NotasMedicoDTO } from 'src/app/modelo/notas-medico-dto';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-atender-cita',
  templateUrl: './atender-cita.component.html',
  styleUrls: ['./atender-cita.component.css']
})
export class AtenderCitaComponent {

  itemCitaMedicaDTO: ItemCitaMedicaDTO;
  notasMedicoDTO: NotasMedicoDTO;
  codigoCita=0;

  constructor(private medicoServicio: MedicoService, private tokenService: TokenService,
    private route: ActivatedRoute, private router: Router){
    this.itemCitaMedicaDTO = new ItemCitaMedicaDTO();
    this.notasMedicoDTO = new NotasMedicoDTO();
    this.obtenerCodigoCita();
    this.atenderCita();
  }

  public atenderCita(){
    this.medicoServicio.atenderCita(this.codigoCita).subscribe({
      next: data => {
        console.log(data.respuesta);
        console.log(data);
        
      this.itemCitaMedicaDTO = data.respuesta;
      },
      error: error => {
        console.log("entra po aca");
        
      console.log(error);
      }
      });
    }

    obtenerCodigoCita() {
      this.route.params.subscribe(params => {
        // params contiene los parámetros de la URL
        this.codigoCita = +params['cita']; // El '+' convierte el string en un número
        console.log('Código de la cita:', this.codigoCita);
        // Luego, puedes utilizar this.codigoCita como desees en tu componente
      });
    }

    finalizarCita(){
      this.notasMedicoDTO.codigoCita=this.codigoCita;
      console.log(this.notasMedicoDTO);
      
      this.medicoServicio.finalizadCita(this.notasMedicoDTO).subscribe({
        next: data => {
          console.log(data);
        this.itemCitaMedicaDTO = data.respuesta;
        this.router.navigate(['/']);
        },
        error: error => {
          console.log("entra po aca");
          
        console.log(error);
        }
      });
    }
}