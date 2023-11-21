import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ClinicaService {
private clinicaURL = "http://localhost:8081/api/clinica";
constructor(private http: HttpClient) { }

public listarCiudades(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-ciudades`);
}

public listarEspecialidades(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-especialidades`);
}
public listarTipoSangre(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-tipoSangre`);
}
public listarEps(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-eps`);
}
public listarAlergias(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-alergias`);
    }
}
