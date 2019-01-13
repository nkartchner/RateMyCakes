import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;
  
  cakeDetails: boolean = false;
  editForm: boolean = false;
  newForm: boolean = false;
  
  ratings = ["5","4.5","4","3.5","3","2.5","2","1.5","1",".5","0"];
  cakes: string[];
  
  index: number;
  
  newCake: any;
  singleCake = {
    _id: "",
    baker: "",
    image:"",
    rating: "",
    comment: ""
  }

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.loggedIn = true;
    this.newCake = {baker: "", image:"", rating:"", comment:""}
    this.getAllCakes();
  }

  getAllCakes(){
    this._httpService.getCakes().subscribe(data =>{
      console.log("Got all the cakes!");
      console.log(data);
      this.cakes = data['data'];
    });
    return;
  }

  toggleNewForm(){
    this.editForm = false;
    this.cakeDetails = false;
    this.newForm = !this.newForm;
    return;
  }

  submitNew(){
    console.log("Submitting new cake");
    this.newForm = false;
    this._httpService.newCake(this.newCake).subscribe(data => {
        console.log("Got the data back");
        console.log(data);
        this.cakes.push(data['data']);
    });
    return;
  }

  toggleEditForm(){
    this.editForm = !this.editForm;
  }

  submitRating(){
    this.editForm = false;
    console.log("Submitting rating");
    this._httpService.updateCake(this.singleCake._id, this.singleCake).subscribe(data => {
      console.log("Got the update data back")
      console.log(data);
      this.cakes[this.index] = data['data'];
    });
    
  }

  toggleDetails(cake:any, i:number){
    this.cakeDetails = true;
    this.editForm = false;
    this.index = i;
    this.singleCake = cake;
    return;
  }

  delete(){
    this.editForm = false;
    this.cakeDetails = false;
    this._httpService.deleteCake(this.singleCake._id).subscribe(data => {
      console.log('deleted')
    });
    return;
  }


}
