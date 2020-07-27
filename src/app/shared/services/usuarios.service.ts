import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/interfaces/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{

  private GET_USER_URL:string = 'http://localhost:8080/coopexpress/srv/usuario/listadoUsuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<Usuarios[]>(this.GET_USER_URL);
  }

}


