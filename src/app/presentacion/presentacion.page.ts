import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../interfaces/person';
import { Trabajo } from '../interfaces/trabajo';
import { Estudio } from '../interfaces/estudio';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  person: Person;
  trabajo: Trabajo;
  estudio: Estudio;
  
  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.person = this.router.getCurrentNavigation().extras.state.person;
        this.trabajo = this.router.getCurrentNavigation().extras.state.trabajo;
        this.estudio = this.router.getCurrentNavigation().extras.state.estudio;
      }
    });
  }

}
