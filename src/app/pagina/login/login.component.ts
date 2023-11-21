import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginDTO: LoginDTO;
  email:string[];
  password:string[];
  alerta!:Alerta;
  
  constructor(private authService: AuthService,private tokenService: TokenService) {
    this.loginDTO = new LoginDTO();
    this.email = [];    
    this.password = [];
  }
  
  public login(){
    console.log(this.loginDTO);
    this.authService.login(this.loginDTO).subscribe({
    next: data => {
    this.tokenService.login(data.respuesta.token);
  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });
  }

  

}

