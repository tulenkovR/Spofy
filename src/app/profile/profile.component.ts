import { Component, OnInit } from '@angular/core';
import { Auth } from './../service/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private _auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

  ngOnInit() {
  }

}
