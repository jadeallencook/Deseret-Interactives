import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}
