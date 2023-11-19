import { Injectable } from '@angular/core';
import { ItemPqrsDTO } from '../modelo/item-pqrsdto';
import { RegistroPqrsDTO } from '../modelo/registro-pqrs-dto';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  pqrs: ItemPqrsDTO[];
  constructor() {
  this.pqrs = [];
  this.pqrs.push({ codigo: 1, estado: 'ACTIVO', codigoCita: 1, tipo: 'demora en servicio', fechaCreacion:
  '2023-10-12',nombrePaciente: 'Pedro Perez' });
  this.pqrs.push({ codigo: 2, estado: 'INACTIVO', codigoCita: 2, tipo: 'solicitud de traslado', fechaCreacion:
  '2023-11-12',nombrePaciente: 'Pablo Paz' });
  this.pqrs.push({ codigo: 3, estado: 'ACTIVO', codigoCita: 3, tipo: 'reclamo de medicamentos', fechaCreacion:
  '2023-11-12',nombrePaciente: 'Diego Garzon' });
  this.pqrs.push({ codigo: 4, estado: 'ACTIVO', codigoCita: 4, tipo: 'reclamo de medicamentos', fechaCreacion:
  '2023-11-12',nombrePaciente: 'Daniela Gonzalez' });
  }
  public listar(): ItemPqrsDTO[] {
  return this.pqrs;
  }
  public obtener(codigo: number): ItemPqrsDTO | undefined{
  return this.pqrs.find(pqrs => pqrs.codigo == codigo);
  }
  public crear(pqrs: RegistroPqrsDTO){
  let codigo = this.pqrs.length + 1;
  this.pqrs.push({codigo: codigo, estado: 'ACTIVO', codigoCita: pqrs.codigoCita, tipo: pqrs.tipo, fechaCreacion: new
  Date().toISOString(), nombrePaciente: pqrs.nombrePaciente });
  }
}
