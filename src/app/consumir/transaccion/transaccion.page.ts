import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../transaccion';
import { ServicioTransaccionService } from '../servicio-transaccion.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {

  transaccion: Transaccion = new Transaccion();
  constructor(private transaccionService: ServicioTransaccionService,
    private toastController: ToastController ) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.transaccion)
    this.transaccionService.sendTransaccion(this.transaccion).subscribe(data =>{
      console.log(data);
      if(data.code = '1')
        this.toast('Realizado Correctamente');

      else if(data.code = '2')
        this.toast('No existe la cuenta destino');
      else if(data.code = '3')
        this.toast('No cuenta con el dinero suficiente');
    })
    this.transaccion=new Transaccion();
  }

  async toast(text: string, duration: number = 2000, position?) {
    const toast = await this.toastController.create({
      message: text,
      position: position || "middle",
      duration: duration
    });
    await toast.present();
  }
}
