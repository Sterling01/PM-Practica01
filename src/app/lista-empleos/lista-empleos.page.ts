import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleosService } from '../shared/services/empleos.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit{

  empleados: Observable<any[]>

  empleados2: any

  cosas:any = new Array()

  usuario : any

  constructor(private empleosService:EmpleosService, private router: Router, private auth: AuthService, private callNumber: CallNumber) { }

  ngOnInit() {
    this.empleados=this.empleosService.getEmpleos()

    this.cosas.push({id:10, nombre:"Stalin F"})
    
    //Obtener datos usuario
    //this.auth.user.subscribe(data =>{
      //this.usuario=data;
    //});

    this.empleados.subscribe(data => {
      
      for(let aux of data){
        aux.iess = aux.salario * 0.095;
        if(aux.salario>200)
          aux.class = "salario-alto"
        else
          aux.class = ''
      }
      this.empleados2 = data;
      
    });

    

  }

  showEmpleo(id:any){
    this.router.navigate([`empleo/${id}`])
  }
  
  showCrearEmpleo(){
    this.router.navigate(['/crear-empleo'])
  }

  trackByFn(index, obj){
    return obj.uid;
  }

}
