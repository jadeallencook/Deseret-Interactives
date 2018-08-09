import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/almanac';
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
  people: Object = {};
  callings = environment.almanac.callings;
  uid: string = this.AlmanacService.guid();

  constructor(private AlmanacService: AlmanacService) {
    this.getPeople();
  }

  edit(uid: string) {
    this.uid = uid;
    this.person = this.people[uid];
  }

  getPeople() {
    this.people = environment.almanac.people;
  }

  add() {
    environment.almanac.people[this.AlmanacService.guid()] = this.person;
    this.person = new Person();
  }

  clear() {
    this.person = new Person();
    this.uid = this.AlmanacService.guid();
  }

  save() {
    environment.almanac.people[this.uid] = this.person;
    this.person = new Person();
    this.uid = undefined;
  }

  ngOnInit() {
  }

}
