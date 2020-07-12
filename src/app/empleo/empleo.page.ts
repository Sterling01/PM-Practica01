import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../shared/services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  empleo: Observable<any>

  constructor(private empleosService:EmpleosService, private route:ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id")

    this.empleo=this.empleosService.getEmpleo(id)

    console.log("Observable", this.empleo)
    
    this.empleo.subscribe(data => {
      console.log("Subscribe", data)
    })

    let auxEmpleado= await this.empleosService.getEmpleoById2(id)
    console.log("Await", auxEmpleado.titulo)

    let telefonos= this.empleosService.getTelefonos(id)

    console.log("Telefonos", telefonos)


  }

  //Para editar es mejor un await
  showEditarEmpleo(id:any){
    this.router.navigate([`actualizar-empleo/${id}`])
  }

}
