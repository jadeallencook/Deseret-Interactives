import { Component, OnInit } from '@angular/core';
import { Person, Name, Location } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [AlmanacService]
})
export class PersonComponent implements OnInit {

  person = new Person();
  name: Name = new Name();
  birthDate: string;
  birthLocation: Location = new Location();
  deathDate: string;
  deathLocation: Location = new Location();
  callings = environment.almanac['callings'];
  uid: string = this.almanac.guid();
  people: Object = environment.almanac.people;
  countries: Array<Object> = this.almanac.getCountries();
  states = {
    birth: this.almanac.getStates(null),
    death: this.almanac.getStates(null)
  }

  constructor(private almanac: AlmanacService) { }

  edit(uid: string) {
    this.uid = uid;
    this.person = this.people[uid];
    this.name = this.almanac.getName(this.person.name);
    this.birthDate = this.almanac.formatDate(this.almanac.getDate(this.person.birth.date));
    this.birthLocation = this.almanac.getLocation(this.person.birth.location);
    this.deathDate = this.almanac.formatDate(this.almanac.getDate(this.person.death.date));
    this.deathLocation = this.almanac.getLocation(this.person.death.location);
    this.updateStates();
  }

  clear() {
    this.person = new Person();
    this.name = new Name();
    this.uid = this.almanac.guid();
    this.birthDate = '';
    this.birthLocation = new Location();
    this.deathDate = '';
    this.deathLocation = new Location();
  }

  save() {
    let person = this.person;
    const personUID = this.uid
    let nameUID = this.almanac.guid();
    if (environment.almanac['people'][personUID]) nameUID = environment.almanac['people'][personUID].name;
    person.name = nameUID;
    environment.almanac['names'][nameUID] = this.name;
    environment.almanac['people'][personUID] = person;
    this.clear();
  }

  updateStates() {
    this.states.birth = this.almanac.getStates(this.birthLocation.country);
    this.states.death = this.almanac.getStates(this.deathLocation.country);
  }

  ngOnInit() {
  }

}
