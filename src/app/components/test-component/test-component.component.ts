import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {

  @Input() icon : String

  @Output() finish = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit() {}

  contador:number=0

  calcular(){
    this.contador=this.contador+1

    this.finish.emit({msg: 'OK', contador:this.contador})
  }

}
