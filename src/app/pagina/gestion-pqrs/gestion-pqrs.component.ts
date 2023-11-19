import { Component } from '@angular/core';
import { ItemPqrsDTO } from 'src/app/modelo/item-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';
@Component({
selector: 'app-gestion-pqrs',
templateUrl: './gestion-pqrs.component.html',
styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {
pqrs: ItemPqrsDTO[];
constructor( private pqrsService: PqrsService ) {
this.pqrs = pqrsService.listar();
}
}
