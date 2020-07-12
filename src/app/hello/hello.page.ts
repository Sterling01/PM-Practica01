import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  id: string = "";

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);

    //let id = this.route.params.;
    const texto: String = "Datos";

  }

}
