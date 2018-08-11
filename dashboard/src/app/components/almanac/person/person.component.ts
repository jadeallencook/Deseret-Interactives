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
  error: string = '';

  constructor(private almanac: AlmanacService) { }

  edit(uid: string) {
    this.clear();
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

  validate() {
    var valid = true;
    if (!this.name.first || !this.name.first || !this.person.bio) valid = false;
    if (!this.name.first) this.error = 'Umm, looks like you forgot the first name...';
    else if (!this.name.last) this.error = 'So you got the first name but where\'s the last name?';
    else if (!this.person.bio) this.error = 'Please write a little bio for this person before you upload...';
    if (valid) {
      return true;
    } else {
      var message = setInterval(() => {
        this.error = '';
        clearInterval(message);
      }, 3000);
      return false;
    }
  }

  save() {
    if (this.validate()) {
      // generate uids
      const uids = {
        person: this.uid,
        name: this.almanac.guid(),
        dates: {
          birth: this.almanac.guid(),
          death: this.almanac.guid()
        },
        locations: {
          birth: this.almanac.guid(),
          death: this.almanac.guid()
        }
      }
      // check name
      if (!this.person.name) this.person.name = uids.name;
      environment.almanac.names[this.person.name] = this.name;
      environment.almanac.people[uids.person] = this.person;
      // check birth location/date
      console.log(this.birthDate);
      // check death location/date
      this.clear();
    }
  }

  formatDateInput(event, objKey) {
    if (event.keyCode !== 8 && this[objKey] && isFinite(event.key)) {
      if (this[objKey].length === 2) this[objKey] += '/';
      if (this[objKey].length === 5) this[objKey] += '/';
      if (this[objKey].length > 9) this[objKey] = this[objKey].substring(0,10);
    } else if (!isFinite(event.key) && event.keyCode !== 8 && !event.returnValue) {
      this[objKey] = this[objKey].substring(0, this[objKey].length - 1)
    }
  }

  updateStates() {
    this.states.birth = this.almanac.getStates(this.birthLocation.country);
    this.states.death = this.almanac.getStates(this.deathLocation.country);
  }

  ngOnInit() {
  }

}
