import { Component } from '@angular/core';
import { RegistroPqrsDTO } from 'src/app/modelo/registro-pqrs-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';
@Component({
selector: 'app-crear-pqrs',
templateUrl: './crear-pqrs.component.html',
styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {
registroPqrsDTO: RegistroPqrsDTO;
constructor(private pqrsService: PqrsService) {
this.registroPqrsDTO = new RegistroPqrsDTO();
}
public crearPqrs(){
this.pqrsService.crear(this.registroPqrsDTO);
}
public seleccionar(codigoCita:number){
this.registroPqrsDTO.codigoCita = codigoCita;
}
}
