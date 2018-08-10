import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Location } from '../models/almanac';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';

@Injectable()
export class AlmanacService {

  section: string = 'person';

  constructor() { }

  // display
  getName = (uid) => { return this.newObj(environment.almanac.names[uid]) }
  getLocation = (uid) => { return this.newObj(environment.almanac.locations[uid]) }
  getState = (uid) => {
    const location: Location = this.getLocation(uid);
    return this.newObj(environment.almanac.states[location.country][location.state]);
  }
  getCountry = (uid) => { return environment.almanac.countries[uid] }
  getDate = (uid) => { return environment.almanac.dates[uid] }

  // obj requests
  getPeople = () => {
    let people = [];
    Object.keys(environment.almanac['people']).forEach(function (uid) {
      const person = environment.almanac.people[uid];
      person.uid = uid;
      people.push(person);
    });
    return people;
  }
  getCountries = () => {
    let array = [];
    Object.keys(environment.almanac.countries).forEach(function (uid) {
      const name = environment.almanac.countries[uid],
        obj = {
          name: name,
          uid: uid
        };
      array.push(obj);
    });
    return array;
  }
  getStates = (uid) => {
    let array = [];
    if (environment.almanac.states[uid]) {
      Object.keys(environment.almanac.states[uid]).forEach(function (uid2) {
        let obj = {
          name: environment.almanac.states[uid][uid2],
          uid: uid2
        }
        array.push(obj);
      });
    }
    return this.newObj(array);
  }

  // build
  newObj = (obj) => { return JSON.parse(JSON.stringify(obj)) }
  capitalize = (string) => { return string.charAt(0).toUpperCase() + string.slice(1) }
  getKeys = (obj) => { return Object.keys(obj) }
  clear = () => { this[this.section] = this.newObj(this['new' + this.capitalize(this.section)]) }
  formatDate = (date) => { return date.month + '/' + date.day + '/' + date.year }

  // generate uid
  guid() {
    const s4 = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
