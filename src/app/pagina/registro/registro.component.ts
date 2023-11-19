import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroPacienteDTO: RegistroPacienteDTO;
  ciudad:string[]=[];
  especialidad:string[]=[];
  eps:string[]=[];
  tipoSangre:string[]=[];
  alergia:string[]=[];
  archivos!:FileList;
  alerta!:Alerta;  

  constructor(private imagenService: ImagenService, private authService: AuthService, private clinicaService: ClinicaService) {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudad = [];
    this.cargarCiudad();
    this.especialidad = [];
    this.cargarEspecialidad();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
    this.alergia = [];
    this.cargarAlergia();
    
  }
  
  public registrar(){
    if (this.registroPacienteDTO.urlFoto.length != 0){
      this.authService.registrarPaciente(this.registroPacienteDTO).subscribe({
        next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
        });
        }else{
        this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
        }
        }

    public sonIguales():boolean{
      return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
      }

    private cargarCiudad() {
      this.clinicaService.listarCiudades().subscribe({
      next: data => {
      this.ciudad = data.respuesta;
      },
      error: error => {
      console.log(error);
      }
      });
    }
      
    private cargarEps() {
        this.clinicaService.listarEps().subscribe({
        next: data => {
        this.eps = data.respuesta;
        },
        error: error => {
        console.log(error);
        }
        });
    }

    private cargarEspecialidad() {
          this.clinicaService.listarEspecialidades().subscribe({
          next: data => {
          this.especialidad = data.respuesta;
          },
          error: error => {
          console.log(error);
          }
          });
    }

    private cargarTipoSangre() {
      this.clinicaService.listarTipoSangre().subscribe({
      next: data => {
      this.tipoSangre = data.respuesta;
      },
      error: error => {
      console.log(error);
      }
      });
      }

      private cargarAlergia() {
        this.clinicaService.listarAlergias().subscribe({
        next: data => {
        this.alergia = data.respuesta;
        },
        error: error => {
        console.log(error);
        }
        });
    }

    public onFileChange(event: any) {
      if (event.target.files.length > 0) {
      this.registroPacienteDTO.urlFoto = event.target.files[0].name;
      this.archivos = event.target.files;
      }
      }

      public subirImagen() {
        if (this.archivos != null && this.archivos.length > 0) {
        const formData = new FormData();
        formData.append('file', this.archivos[0]);
        this.imagenService.subir(formData).subscribe({
        next: data => {
        this.registroPacienteDTO.urlFoto = data.respuesta.url;
        },
        error: error => {
        this.alerta = { mensaje: error.error, tipo: "danger" };
        }
        });
        } else {
        this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
        }
        }

}
