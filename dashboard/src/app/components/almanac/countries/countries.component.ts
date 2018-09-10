import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Country, Year } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries = environment.almanac.countries;
  country: Country = new Country();
  year = new Year();
  editor = {
    key: null,
    year: new Date().getFullYear()
  };

  constructor(private almanac: AlmanacService) {
  }

  edit(key) {
    this.country = new Country();
    this.editor.key = key;
    this.country.name = this.countries[key];
  }

  ngOnInit() {
  }

}
