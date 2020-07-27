import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  usuario: Observable<Usuarios[]>

  constructor(private UsuariosService : UsuariosService) { }

  ngOnInit() {
    this.usuario = this.UsuariosService.getUsuarios()
    console.log("Nose que pasa SI ingresa")
    console.log(this.usuario)
  }


}
