import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/interfaces/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  private GET_TRANSFERENCIA_URL:string = 'http://localhost:8080/coopexpress/srv/transacciones/listadoTransferencias';

  constructor(private http: HttpClient) { }

  getTransferencias(): Observable<any[]> {
    return this.http.get<Transaccion[]>(this.GET_TRANSFERENCIA_URL);
  }

}
