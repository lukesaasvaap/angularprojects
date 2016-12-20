import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DataDrivenComponent  {
id:string;
user={
  fname: '',
  email: '',
  address: '',
  gender:'Male'

}
genders=[
 'Male',
  'Female'
];
constructor(){
}
   title = 'Angular2 Project';
  message = 'This project for study angular 2';
  subtitle = 'Add Page';
  onSubmit(form:NgForm){
    console.log(form);
    console.log(this.user);
  }

 
}
