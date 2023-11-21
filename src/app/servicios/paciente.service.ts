import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { RegistroPqrsDTO } from '../modelo/registro-pqrs-dto';
import { DetallePacienteDTO } from '../modelo/detalle-paciente-dto';
@Injectable({
  providedIn: 'root'
  })
  export class PacienteService {
  private userUrl = "http://localhost:8081/api/pacientes";
  constructor(private http: HttpClient) { }
  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }
  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
  return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }
  public editarPerfil(pacienteDTO: DetallePacienteDTO): Observable<MensajeDTO> {
  return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO);
  }
  public crearPQRS(registroPQRSDTO: RegistroPqrsDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }
  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs-paciente/${codigoPaciente}`);
  }
  }
