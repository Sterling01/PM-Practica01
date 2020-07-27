import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaccion } from './transaccion';
import { Observable } from 'rxjs';
import { Respuesta } from './respuesta';

@Injectable({
  providedIn: 'root'
})
export class ServicioTransaccionService {

  private SEND_TRANSACCION_URL:string ='http://localhost:8080/coopexpress/srv/transaccion/depositar';

  constructor(private http: HttpClient) { }

  sendTransaccion(transaccion:Transaccion): Observable<any> {

    return this.http.post<Respuesta>(this.SEND_TRANSACCION_URL, transaccion);
  }
}
