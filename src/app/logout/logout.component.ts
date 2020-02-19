import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route : Router, private auth : AuthenticationService) { }

  ngOnInit() {
    this.auth.loggedOut();
  }

  loginagain(){
    this.route.navigate(['login']);
  }
}
