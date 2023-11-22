import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private userUrl = "http://localhost:8080/api/medicos";
  
  constructor(private http: HttpClient) { }
  
  public listarCitas(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-citas/${codigo}`);
}
}