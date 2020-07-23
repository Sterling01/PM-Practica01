import { Component, OnInit, Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss'],
})
export class CallsComponent implements OnInit {

  @Input() numero:string;

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {}

  llamar(){
    this.callNumber.callNumber(this.numero, true)
    //console.log(this.numero)
  }

}
