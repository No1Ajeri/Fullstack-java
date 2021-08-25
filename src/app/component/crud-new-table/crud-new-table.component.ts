import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/class';
import { Service } from 'src/app/service/service';


@Component({
  selector: 'app-crud-new-table',
  templateUrl: './crud-new-table.component.html',
  styleUrls: ['./crud-new-table.component.css']
})
export class CrudNewTableComponent implements OnInit {

  persons: Person[] = [];
  _eDel: boolean = true;
  constructor(private service: Service, private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
   
    this.service.getPersons().subscribe(jude => {
      this.persons = jude;
    })
  }

  edit(person: Person) {
    this.service.setPerson(person);
    this.service.setIsEdit(true);
    this.router.navigate(['/form']);
  }


  selectedPersonGroup: Person[] = [];
  selectPerson(event: any, person: Person) {
    console.log("EVENT >>>>", event);
    let _index: number;
    if (event.target.checked) {
      this.selectedPersonGroup.push(person)
    } else {
      _index = this.selectedPersonGroup.findIndex(e => e.personId == person.personId);
      this.selectedPersonGroup.splice(_index, 1);
    }
    console.log("selected index array>>>>", this.selectedPersonGroup);  //For checkBox
    if (this.selectedPersonGroup.length > 0) {
      this._eDel = false;
    } else {
      this._eDel = true;
    }
  }

  delete() {

    console.log(this.selectedPersonGroup)
    this.selectedPersonGroup.forEach(t => {
      console.log(t.personId)
      this.service.apiDeletePerson(t.personId).subscribe(d => {
        console.log(d)
        this.ngOnInit();
      });
    
    })
    this.selectedPersonGroup = [];


  }

 

  addPerson() {
    let person: Person = new Person(0, "", "", "", 0, "");
    this.service.setPerson(person);
    this.service.setIsEdit(false);
    this.router.navigate(['/form']);
  }



}
