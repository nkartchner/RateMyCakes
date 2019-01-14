import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  @Input() singleCake: any;
  @Output() event = new EventEmitter();

  constructor() { }

  calculateRatings(cake:any){
    let sum = 0;
    cake.ratings.forEach(element => {
      console.log("looped element");
      console.log(element);
      sum += element.rating;
      console.log("sum");
      console.log(sum);

    });
    let avg = sum / cake.ratings.length;
    console.log(avg);
    return avg;

  }

}
