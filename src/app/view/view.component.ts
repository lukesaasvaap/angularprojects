import { Component, OnInit, trigger,
    state,
    style,
    transition,
    animate,
    group,
    keyframes} from '@angular/core';
//import {Response} from '@angular/http';
import {NgForm} from '@angular/forms';
import {Http ,Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { HttpService } from '../http.service';
import { MyPipe } from './mykey.pipe';
import { Student } from '../student';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
   animations: [

        trigger('focusPanel', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: '#eee'
            })),
            state('active', style({
                transform: 'scale(1.1)',
                backgroundColor: '#cfd8dc'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),

        trigger('movePanel', [
            
            transition('void => *', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                    style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                ]))
            ])

        ]),
        trigger('flyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.20s 0.10s ease', style({
          transform: 'translateX(0)',
          width: 900
        })),
        animate('0.20s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.20s ease', style({
          transform: 'translateX(50px)',
          width: 300
        })),
        animate('0.20s 0.20s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])

   ]

})
export class ViewComponent implements OnInit  {
 

  user  ={
    studId:'',
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
  {'name':'Music','checked': false},
{'name':'Film','checked': false
}];
copyHobby =Object.assign([],this.hobbys);

courses=[
  '--select--',
 'ECE',
  'CSE'
];

   //asyncValue = this.getData();
    title = 'Angular2 Project';
  message = 'This project for study angular 2';
  subtitle = 'View Page';
  students: any;
  errorMessage:any;
 
constructor(private http:Http, private httpservice:HttpService){

};
state: string = 'inactive';

    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }

 private ErrorMsg: string;
    public ErrorMessageIsVisible: boolean;
   getData(){
      return  this.http.get('http://localhost:1337/localhost:8080/StudentsProject/rest/students/all');
    }
    getStudents(): void {
    this.httpservice
        .getStudents()
        .then(student => this.students = student );
      //  console.log(this.students);
  }

    getHeroes() {
 this.httpservice.getHeroes().subscribe(data => {
   this.students = data;
        // console.log(data[0].studId);
     });;
// console.log(post1[0]);
                  
  }
ngOnInit(){
this.getHeroes();
 //this.getStudents();
 //this.httpservice.getFoods();
 //console.log(this.httpservice.getHeroes());
// .subscribe(data => {
//         console.log(data[0].studId);
//     });
 }

 editFn(student){
    this.user.studId = student.studId;
      this.user.studFirstName = student.studFirstName;
        this.user.studLastName = student.studLastName;
          this.user.studAddress = student.studAddress;
            this.user.studGender = student.studGender;
              this.user.studCourse = student.studCourse;

  var str =student.studHobby ;
  //console.log(str);
                    	   var str_array = str.split(',');
              this.hobbys=[
  {'name':'Music','checked': false},
{'name':'Film','checked': false
}];
                        var  tempHobby = this.hobbys;
 tempHobby.forEach(function(option) {
    // console.log(option.name+option.value);
                    	   for(var i = 0; i < str_array.length; i++) {
                    	      str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                            //  console.log(str_array[i]);
                    	      if(option.name===str_array[i]){
                               
                              option.checked=true;
                              
                    	      }
                    	      
                    	   }
                 
                    	   });
                    
  this.ErrorMessageIsVisible=true;
  console.log(tempHobby);
   this.hobbys = tempHobby;

 }


  onSubmit(form:NgForm){
this.user.studHobby = this.onTickHobby();
 console.log(this.user.studHobby);
this.httpservice.updateStudents(this.user.studId,this.user.studFirstName,this.user.studLastName,this.user.studAddress,
this.user.studGender,this.user.studHobby,this.user.studCourse)
 .subscribe(data => {
  console.log(data._body);
  alert(data._body);
  
 this.getHeroes();
 this.hideErrorMsg();
   });
                          //  this.httpservice.createStudent(this.student).subscribe((data:any)=>console.log(data.body));
  }

 deleteFn(student){
   this.httpservice.deleteStudent(student.studId)
 .subscribe(data => {
  console.log(data._body);
  alert(data._body);

  this.getHeroes();
 });
 }
 hideErrorMsg()
    {
        this.ErrorMessageIsVisible = false;
    }
    courseChange(value1){
    this.user.studCourse=value1;
  }
  onTickHobby (): string{
   var returnValue = '';
 //   console.log(this.hobbys);

    this.hobbys.forEach(function(option) {
               	          if (option.checked) {
               	            if (returnValue) {
               	            	returnValue += ','
               	            }
               	            returnValue += option.name;
               	          }
  
    });
    return returnValue;
}
onCheckClicked(value3){
  console.log(value3.name)
   var  tempHobby = this.hobbys;
 tempHobby.forEach(function(option) {
                    	  
                    	//  var  tempValue = value3.replace(/^\s*/, "").replace(/\s*$/, "");
                    //  var  tempValue = value3.name;
                            //  console.log(str_array[i]);
                    	      if(option.name===value3.name){       
                             if(value3.checked) {
                               option.checked=false;
                             }else{
                               option.checked=true;
                             }
                            
                    	      }
                    	   });
                           this.hobbys = tempHobby;
}

}
