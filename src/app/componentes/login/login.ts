import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  usuarios : Usuario[] = [];

  ngOnInit(): void {
    this.usuarios.push(
      {nombre: "admin", contraseña: "admin"},
      {nombre: "usuario", contraseña: "usuario"},
      {nombre: "invitado", contraseña: "invitado"}
    );
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
  }

}
