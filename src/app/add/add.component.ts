import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Http ,Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { HttpService } from '../http.service';
import { Student } from '../student';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
id:string;
   title = 'Angular2 Project';
  message = 'This project for study angular 2';
  subtitle = 'Add Page';
 public user ={
  studFirstName: '',
  studLastName: '',
  studAddress: '',
  studGender:'',
  studHobby:'',
  studCourse:'--select--'

}

genders=[
 'Male',
  'Female'
];
hobbys=[
  {name:'Music',value: false},
{name:'Film',value: false
}];
courses=[
  '--select--',
 'ECE',
  'CSE'
];
//student :Student;

 stud: Student;
constructor(private activatedRoute:ActivatedRoute,private http:Http, private httpservice:HttpService){
this.id = activatedRoute.snapshot.params['id'];
}


  onSubmit(form:NgForm){
this.user.studHobby = this.onTickHobby();
 console.log(this.user.studHobby);
this.httpservice.createStudent(this.user.studFirstName,this.user.studLastName,this.user.studAddress,
this.user.studGender,this.user.studHobby,this.user.studCourse)
 .subscribe(data => {
  console.log(data._body);
  alert(data._body);
  this.user ={
  studFirstName: '',
  studLastName: '',
  studAddress: '',
  studGender:'',
  studHobby:'',
  studCourse:'--select--'

}
this.hobbys=[
  {name:'Music',value: false},
{name:'Film',value: false
}];
   });
                          //  this.httpservice.createStudent(this.student).subscribe((data:any)=>console.log(data.body));
  }

 
courseChange(value1){
    this.user.studCourse=value1;
  }
  onTickHobby (): string{
   var returnValue = '';
 //   console.log(this.hobbys);

    this.hobbys.forEach(function(option) {
               	          if (option.value) {
               	            if (returnValue) {
               	            	returnValue += ','
               	            }
               	            returnValue += option.name;
               	          }
  
    });
    return returnValue;
}



}
