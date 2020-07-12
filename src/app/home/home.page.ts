import { Component } from '@angular/core';
import { Person } from '../interfaces/person';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  person : Person = {
    cedula: '',
    nombre: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: '',
    cargo: '',
    funciones: '',
    tiempo: ''
  } 

  constructor(public router: Router) {}

  saludar(){
    console.log("HOLA "+ this.person.nombre)
    this.person.direccion = "Cuenca - Ecuador"
    this.router.navigate(['hello', this.person.sexo])
  }

  siguiente(){
    let extras: NavigationExtras = {
      state:{
        person: this.person
      }
    };
    this.router.navigate(['data'], extras);
  }
}
