import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  authenticate(){
    if(this.username === 'admin' && this.password === 'admin') {
      this.route.navigate(['body']);
      this.invalidLogin = false;
      console.log('T');
    }
    else{
      this.invalidLogin = true;
      console.log('F');
    }
  }
}
