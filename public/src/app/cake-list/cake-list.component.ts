import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CakeModel, RatingModel } from '../models/models';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent {
  @Input() cakes:any;
  @Output() event = new EventEmitter();
  ratings = [1.5,2,2.5,3,3.5,4,4.5,5];
  tempCake: any;
  newRating = {
    rating: 0,
    comment: ''
  }
  constructor(private _httpService:HttpService) { }

  rate(cake: any){
    console.log('cake list component');
    console.log(cake);
    cake.ratings = [... cake.ratings, this.newRating];
    console.log("After push");
    
    console.log(cake);
    console.log(this.newRating);
    
    this._httpService.updateCake(cake).subscribe(data => {
      console.log("Got the update data back")
      console.log(data);
    });
  }


  setSingle(cake: CakeModel){
    this.event.emit(cake)
  }

}
