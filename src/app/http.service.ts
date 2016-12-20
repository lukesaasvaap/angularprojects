import {Injectable} from '@angular/core';
import {Http ,Response,Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Student } from './student';

import 'rxjs/Rx';

@Injectable()
export class HttpService{

  private url ='http://localhost:1337/localhost:8080/StudentsProject/rest/students';
  private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http){

    }
    getData(){
      return  this.http.get('http://localhost:1337/localhost:8080/StudentsProject/rest/students/all')
      .map((response:Response)=> response.json());
    }

    sendData(user:any){
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:1337/localhost:8080/StudentsProject/rest/students',body,{headers:headers});
     // .map((response:Response)=> response.json());
      
    }
    getStudents(): Promise<Student[]> {
    return this.http.get(this.url + '/all')
               .toPromise()
               .then(response => response.json().data as Student[])
               .catch(this.handleError);
  }


     private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getFoods(){
    this.http.get(this.url+'/all')
      .map((res:Response) => res.json())
      .subscribe(
        data => { console.log(data)},
        err => console.error(err),
        () => console.log('done')
      );
  }
  getHeroes()  {
  return  this.http.get(this.url+'/all')
                    .map(res => res.json()).catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }



  updateStudents(studId: string ,studFirstName: string,studLastName: string,studAddress: string,studGender: string,studHobby: string,studCourse: string) {
  return this.http
    .put(this.url, JSON.stringify({studId:studId,studFirstName:studFirstName,studLastName:studLastName,studAddress:studAddress,
      studGender:studGender,studHobby:studHobby,studCourse:studCourse}), {headers: this.headers})
    .catch(this.handleError);
}

createStudent(studFirstName: string,studLastName: string,studAddress: string,studGender: string,studHobby: string,studCourse: string) {
 return this.http
    .post(this.url, JSON.stringify({studFirstName:studFirstName,studLastName:studLastName,studAddress:studAddress,
      studGender:studGender,studHobby:studHobby,studCourse:studCourse}), {headers: this.headers})
   // .map(res => res)
   .catch(this.handleError);
}

deleteStudent(sid: number) {
  const url = `${this.url}/${sid}`;
  return this.http.delete(url, {headers: this.headers})
    .catch(this.handleError);
}
}