import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { CakeModel, RatingModel } from './models/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;
  cakes: any[];  
  index: number;  
  newCake: any;
  singleCake: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.loggedIn = true;
    this.newCake = {
      baker: "", 
      image: "",
    }
    this.getAllCakes();
  }

  getAllCakes(){
    this._httpService.getCakes().subscribe(data =>{
      console.log("Got all the cakes!");
      this.cakes = data['data'];
    });
    return;
  }


  submitNew(){
    console.log("Submitting new cake");
    this._httpService.newCake(this.newCake).subscribe(data => {
        console.log("Got the data back");
        console.log(data);
        this.cakes.push(data['data']);
    });
    
    return;
  }

  setSingle(cake: any){
    console.log(cake);
    
    this.singleCake=cake;
    
  }



  toggleDetails(cake: any, i:number){
    this.index = i;
    this.singleCake = cake;
    return;
  }

  delete(){
    this._httpService.deleteCake(this.singleCake._id).subscribe(data => {
      console.log('deleted')
    });
    return;
  }


}
