import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroPacienteDTO: RegistroPacienteDTO;
  ciudad:string[];
  eps:string[];
  tipoSangre:string[];
  alergia:string[];
  archivos!:FileList;

  constructor() {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudad = [];
    this.cargarCiudad();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
    this.alergia = [];
    this.cargarAlergia();
  }
  
  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.registroPacienteDTO);
    }else{
    console.log("Debe cargar una foto");
    }
    }
  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
    }

    private cargarCiudad(){
      this.ciudad.push("Armenia");
      this.ciudad.push("Calarcá");
      this.ciudad.push("Pereira");
      this.ciudad.push("Manizales");
      this.ciudad.push("Medellín");
      }
      
      private cargarEps(){
        this.eps.push("medimas");
        this.eps.push("sanitas");
        this.eps.push("sura");
        this.eps.push("cafe salud");
        this.eps.push("sos");
        }

        private cargarTipoSangre(){
          this.tipoSangre.push("A_POSITIVO");
          this.tipoSangre.push("A_NEGATIVO");
          this.tipoSangre.push("B_POSITIVO");
          this.tipoSangre.push("B_NEGATIVO");
          this.tipoSangre.push("AB_POSITIVO");
          this.tipoSangre.push("AB_NEGATIVO");
          this.tipoSangre.push("O_POSITIVO");
          this.tipoSangre.push("O_NEGATIVO")
          
          }

          private cargarAlergia(){
            this.alergia.push("Maní");
            this.alergia.push("Mariscos");
            this.alergia.push("Gatos");
            this.alergia.push("Polvo")
            
            }

            public onFileChange(event:any){
              if (event.target.files.length > 0) {
              const files = event.target.files;
              this.archivos = event.target.files;
              console.log(files);
              }
              
              }

}
