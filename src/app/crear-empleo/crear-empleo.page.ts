import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../shared/services/empleos.service';
import { Router } from '@angular/router';
import { Empleo } from '../interfaces/empleo';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo()

  base64Image: any

  constructor(private empleosService:EmpleosService, private router: Router, private camera:Camera) { }

  ngOnInit() {
  }

  async guardarEmpleo(){
    console.log(this.empleo)

    let number = await this.empleosService.saveEmpleado2(this.empleo)
    console.log("Nuevo empleo guardado", number)

    //this.empleosService.insertEmpleo(this.empleo)
  }

  saludar(data:any){
    console.log("HOLA", data)
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(this.base64Image)
    }, (err) => {
     // Handle error
     console.log(err)
    });
  }

  imagenCargada(e){
    console.log("imagen cargada")
    console.log(JSON.stringify(e))
    this.empleo.image = e;
  }

}
