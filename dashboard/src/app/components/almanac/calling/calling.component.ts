import { Component, OnInit, Input } from '@angular/core';
import { Person, Calling } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss'],
  providers: [AlmanacService],
  host: {
    class: 'col-12'
  }
})

export class CallingComponent implements OnInit {

  @Input() uid: string;
  calling: Calling = new Calling();
  allCallings: Object = environment.almanac.callings;
  callingResults: Object = {};
  callings: Object = {};

  constructor(private AlmanacService: AlmanacService) {
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  reset() {
    this.calling = new Calling();
  }

  add() {
    environment.almanac.callings[this.AlmanacService.guid()] = JSON.parse(JSON.stringify(this.calling));
    this.findCalling();
    this.reset();
  }

  addCallingToPerson(key) {
    if (!environment.almanac.people[this.uid]) environment.almanac.people[this.uid] = new Person();
    else environment.almanac.people[this.uid].callings.push(key);
    console.log(environment.almanac.people);
  }

  findCalling() {
    this.callingResults = [];
    Object.keys(this.allCallings).forEach(calling => {
      if (this.allCallings[calling].name.toLowerCase().indexOf(this.calling.name.toLowerCase()) > -1 && Object.keys(this.callingResults).length < 10 && this.calling.name.length > 0) {
        this.callingResults[calling] = this.allCallings[calling];
      }
    });
  }

  ngOnInit() {
  }

}
