import { Injectable } from '@angular/core';

@Injectable()
export class AlmanacService {

  section: string = 'person';

  constructor() {}

  newObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getKeys(obj) {
    return Object.keys(obj);
  }
  
  clear() {
    var obj = 'new' + this.capitalize(this.section);
    this[this.section] = this.newObj(this[obj]);
  }

  add() {
    var data = this[this.section];
  }

  guid() {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
