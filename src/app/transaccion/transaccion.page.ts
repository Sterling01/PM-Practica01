import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from '../shared/services/transacciones.service';
import { Transaccion} from '../interfaces/transaccion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {

  transacciones: Observable<Transaccion[]>
  
  transacciones1: Observable<Transaccion[]>
  
  constructor(private transaccionesService : TransaccionesService) { }

  ngOnInit() {

    this.transacciones = this.transaccionesService.getTransferencias()

    console.log(this.transacciones)
}
}
