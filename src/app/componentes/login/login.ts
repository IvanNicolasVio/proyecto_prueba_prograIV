import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  usuarios : Usuario[] = [];
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    let datosCargados = localStorage.getItem("usuarios");
    if (datosCargados) {
      this.usuarios = JSON.parse(datosCargados);
    } else {
      this.usuarios = [
        { nombre: "admin", contraseña: "admin" },
        { nombre: "usuario", contraseña: "usuario" },
        { nombre: "invitado", contraseña: "invitado" }
      ];
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }
  }

  login(): void {
    this.error = "";
    let usuarioEncontrado = this.usuarios.find(u => 
      u.nombre === this.username && u.contraseña === this.password
    );
    if (usuarioEncontrado) {
      this.router.navigate(['/home']);
    } else {
      this.error = "Credenciales incorrectas";
    }
  }
}
