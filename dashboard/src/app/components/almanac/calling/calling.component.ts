import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calling } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import { environment } from '../../../../environments/environment';
import * as firebase from 'firebase';

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
  @Output() update = new EventEmitter();
  calling: Calling = new Calling();
  callings: Object = environment.almanac.callings;
  callingResults: Object = [];

  constructor(private AlmanacService: AlmanacService) {
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  reset() {
    this.calling = new Calling();
  }

  add() {
    firebase.database().ref(`almanac/callings/${this.AlmanacService.guid()}/`).set(JSON.parse(JSON.stringify(this.calling))).then(() => {
      this.callings = environment.almanac.callings;
      this.findCalling();
      this.reset();
    });
  }

  addCallingToPerson(key) {
    if (environment.almanac.people[this.uid] && this.calling.name) {
      if (!environment.almanac.people[this.uid].callings) {
        environment.almanac.people[this.uid].callings = [];
      }
      environment.almanac.people[this.uid].callings.push(key);
      firebase.database().ref(`almanac/people/${this.uid}/callings/`).set(environment.almanac.people[this.uid].callings).then(() => {
        this.update.emit();
      });
    }
  }

  findCalling() {
    this.callingResults = [];
    Object.keys(this.callings).forEach(calling => {
      if (this.callings[calling].name.toLowerCase().indexOf(this.calling.name.toLowerCase()) > -1 && Object.keys(this.callingResults).length < 10 && this.calling.name.length > 0) {
        this.callingResults[calling] = this.callings[calling];
      }
    });
  }

  ngOnInit() {
  }

}
