import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nombre: string = "";
  contrasenia: string = "";
  error: string = "";
  confirmPassword: string = "";

  constructor(private router: Router) {}

  register(): void {
    this.error = "";
    if (!this.nombre || !this.contrasenia) {
      this.error = "Todos los campos son obligatorios";
      return;
    }
    if (this.contrasenia !== this.confirmPassword) {
      this.error = "Las contraseñas no coinciden";
      return;
    }
    let usuariosGuardados = localStorage.getItem("usuarios");
    let listaUsuarios: any[] = [];
    if (usuariosGuardados) {
      listaUsuarios = JSON.parse(usuariosGuardados);
    }
    let existe = listaUsuarios.find(u => u.nombre === this.nombre);
    if (existe) {
      this.error = "El nombre de usuario ya está en uso";
      return;
    }
    let nuevoUsuario = {
      nombre: this.nombre,
      contraseña: this.contrasenia
    };
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    this.router.navigate(['/home']);
  }
}

