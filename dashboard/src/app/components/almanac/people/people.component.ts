import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Person } from '../../../models/almanac';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    
  }

  people() {
    var people = [];
    Object.keys(environment.almanac.people).forEach(key => {
      let person = environment.almanac.people[key];
      person.uid = key;
      people.push(person);
    });
    return people;
  }

  editPerson(uid) {
    this.edit.emit(uid);
  }

  ngOnInit() {
  }

}
