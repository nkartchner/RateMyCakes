import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  @Input() something: any;
  @Output() event = new EventEmitter();

  constructor() { }

  cakeEvent(){
    this.event.emit();
  }

}
