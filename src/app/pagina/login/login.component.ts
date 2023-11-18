import { Component } from '@angular/core';
import { loginDTO } from 'src/app/modelo/login-dto';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginDTO: loginDTO;
  email:string[];
  password:string[];
  
  constructor() {
    this.loginDTO = new loginDTO();
    this.email = [];    
    this.password = [];
  }
  
  public login(){
    console.log(this.loginDTO);
     
    }
    public sonIguales():boolean{
      return this.loginDTO.password == this.loginDTO.confirmaPassword;
      }

}

