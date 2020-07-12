import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleosService } from '../shared/services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleo',
  templateUrl: './actualizar-empleo.page.html',
  styleUrls: ['./actualizar-empleo.page.scss'],
})
export class ActualizarEmpleoPage implements OnInit {

  empleo: any

  constructor(private empleosService:EmpleosService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id")
    
    this.empleo=this.empleosService.getEmpleo(id)

    let receivedEmpleo:any;
    
    this.empleo.subscribe(data => {
      receivedEmpleo = data;
      this.empleo = receivedEmpleo;
    });

  }

  actualizarEmpleo(){
    //console.log(this.empleo)
    this.empleosService.updateEmpleo(this.empleo)
    this.router.navigate(['lista-empleos'])  
  }

}
