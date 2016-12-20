import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

   title = 'Angular2 Project';
  message = 'This project for study angular 2';
  subtitle = 'Home Page';
constructor(private router:Router){

}

  onNavigate(){
this.router.navigate(['add',10]);
//this.router.navigate(['add'],{queryParams:{'key':100}});
  }

 
}
