import { Injectable } from "@angular/core";
import { Person } from "../class/class";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class Service {

    persons: Person[] = [];
    person: any;
    index: number = -1;
    isEdit: boolean = false;

    url: string = 'http://localhost:8080/api';
    constructor(private http: HttpClient) {
    }

    getPersons() {
        return this.http.get<Person[]>(this.url + "/getAllEmployees");
    }

    setPerson(person: Person) {
        return this.person = person;
    }

    setPersons(person: Person) {
      return this.http.post(this.url + "/new", person);
       
    }

    getPerson() {
        if (this.person == undefined || this.person == null) {
            return null;
        } else {
            return this.person;
        }

    }

    deletePerson(person: Person) {
        let personId = person.personId;
        return this.http.delete(this.url + "/deleteAnyUser/" + personId);
    }

    apiDeletePerson(id: number){
        return this.http.delete(this.url + "/deleteAnyUser/" + id);

    }

    updatePerson(person: Person) {
        return this.http.put(this.url + "/updateEmployee", person);
    }

    setIsEdit(isEdit: boolean) {
        return this.isEdit = isEdit;
    }

    getIsEdit() {
        return this.isEdit;
    }
 

}