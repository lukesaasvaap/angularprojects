export class Student {

  
 studId: string;
studFirstName: string;
studLastName: string;
studAddress: string;
studGender: string;
studHobby: string;
studCourse: string;

constructor(private id: string,private fname: string,private lname: string,
private address :string,private hobby:string,private gender:string,private course:string){

}

getStudId():string{
    return this.studId;
}
getStudFirstName():string{
    return this.studFirstName;
}
getStudLastName():string{
    return this.studLastName;
}
getStudAddress():string{
    return this.studAddress;
}
getStudHobby():string{
    return this.studHobby;
}
getStudGender():string{
    return this.studGender;
}
getStudCourse():string{
    return this.studCourse;
}

}