import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Person } from '../interfaces/person';
import { Trabajo } from '../interfaces/trabajo';
import { Estudio } from '../interfaces/estudio';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.page.html',
  styleUrls: ['./estudio.page.scss'],
})
export class EstudioPage implements OnInit {

  person: Person;
  trabajo: Trabajo;

  estudio: Estudio ={
    tituloTercer: '',
    titoloCuarto: ''
  }

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.person = this.router.getCurrentNavigation().extras.state.person;
        this.trabajo = this.router.getCurrentNavigation().extras.state.trabajo;
      }
    });
  }

  finalizar(){
    let extras: NavigationExtras = {
      state:{
        person: this.person,
        trabajo: this.trabajo,
        estudio: this.estudio
      }
    };
    this.router.navigate(['presentacion'], extras);
  }

}
