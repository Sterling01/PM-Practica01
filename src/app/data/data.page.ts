import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Person } from '../interfaces/person';
import { Trabajo } from '../interfaces/trabajo';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  person: Person;

  trabajo : Trabajo={
    cargo: '',
    funciones: '',
    tiempo: ''
  }

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.person = this.router.getCurrentNavigation().extras.state.person;
      }
    });

  }

  siguiente(){
    let extras: NavigationExtras = {
      state:{
        person: this.person,
        trabajo: this.trabajo
      }
    };
    this.router.navigate(['estudio'], extras);
  }

}
