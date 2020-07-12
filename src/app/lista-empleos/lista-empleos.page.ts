import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleosService } from '../shared/services/empleos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit{

  empleados: Observable<any[]>

  empleados2: any

  cosas:any = new Array()

  constructor(private empleosService:EmpleosService, private router: Router) { }

  ngOnInit() {
    this.empleados=this.empleosService.getEmpleos()

    this.cosas.push({id:10, nombre:"Stalin F"})

    this.empleados.subscribe(data => {
      
      for(let aux of data){
        aux.iess = aux.salario * 0.095;
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
