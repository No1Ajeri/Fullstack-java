import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/class';
import { Service } from 'src/app/service/service';


@Component({
  selector: 'app-crud-new-form',
  templateUrl: './crud-new-form.component.html',
  styleUrls: ['./crud-new-form.component.css']
})
export class CrudNewFormComponent implements OnInit {

  personId: number = 0;
  firstName: string = "";
  lastName: string = "";
  profession: string = "";
  salary: number = 0;
  city: string = "";
  isEdit:boolean = false;

  person: Person = new Person(this.personId, this.firstName, this.lastName, this.profession, this.salary, this.city);
  persons: Person[] = [];
  constructor(private router:Router, private service:Service) { }

  ngOnInit(): void {
    this.person = this.service.getPerson();
    this.isEdit = this.service.getIsEdit();
    this.setPersonObj(this.person)
  }


  setPersonObj(person:Person){
    if (person != null || person != undefined){
      this.firstName = person.firstName;
      this.lastName = person.lastName;
      this.profession = person.profession;
      this.salary = person.salary;
      this.city = person.city;
      this.personId = person.personId;
    }

  }

  save() {
    this.person = {
      personId: this.personId,
      firstName: this.firstName,
      lastName: this.lastName, 
      profession: this.profession,
      salary: this.salary,
      city: this.city
    }
    if (this.person.firstName != ""){
      if(!this.isEdit){
        this.service.setPersons(this.person).subscribe(e=>{
          this.router.navigate(['']);
        },err=>{
          console.log("ERR!!!",err)
        });  
      }else{
        this.service.updatePerson(this.person).subscribe(e=>{
          this.router.navigate(['']);
        },err=>{
          console.log("ERR!!!",err)
        });  
            
      }
    
   
    }

  }


}
