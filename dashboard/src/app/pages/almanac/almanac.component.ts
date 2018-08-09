import { Component, OnInit } from '@angular/core';
import { Person, Calling } from '../../models/almanac';
import { environment } from '../../../environments/environment';
import { AlmanacService } from '../../services/almanac.service';

@Component({
  selector: 'app-almanac',
  templateUrl: './almanac.component.html',
  styleUrls: ['./almanac.component.scss'],
  providers: [AlmanacService]
})
export class AlmanacComponent implements OnInit {

  // build
  section: string;

  constructor(private AlmanacService: AlmanacService) {
    this.section = 'person';
  }

  changeSection(section) {
    this.section = section;
  }

  ngOnInit() {
  }

}
