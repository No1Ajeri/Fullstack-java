export class Person{
    personId: number;
    firstName:string;
    lastName:string;
    profession:string;
    salary:number;
    city:string;

  constructor(
    personId:number,
    firstName:string, 
    lastName:string,
    profession:string,
    salary:number,
    city:string
    ){
    this.personId = personId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
    this.city = city;
  }

}