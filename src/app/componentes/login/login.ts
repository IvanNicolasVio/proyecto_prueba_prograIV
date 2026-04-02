import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  usuarios : Usuario[] = [];
  username: string = "";
  password: string = "";

  ngOnInit(): void {
    this.usuarios.push(
      {nombre: "admin", contraseña: "admin"},
      {nombre: "usuario", contraseña: "usuario"},
      {nombre: "invitado", contraseña: "invitado"}
    );
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
  }

  login(): void {
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.nombre === this.username && usuario.contraseña === this.password);
    if (usuarioEncontrado) {
      alert("Login exitoso");
    } else {
      alert("Credenciales incorrectas");
    }
  }

}
