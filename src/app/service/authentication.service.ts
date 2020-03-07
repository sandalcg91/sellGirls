import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private route : Router) { }

  userAuth(username, password){
    if(username === 'chandan' || username === 'Chandan'){
      this.route.navigate(['randi', username]);
    }
    else if(password === 'admin'){
      sessionStorage.setItem('authUser',username);
    //  console.log('entered in if block - auth');
      return true;

    }else{
    //  console.log('entered in else block - auth');
      
      return false;
    }
  }

  loggedIn(){
    let user = sessionStorage.getItem('authUser');
    return !(user == null);
  }

  loggedOut(){
    sessionStorage.removeItem('authUser');
  }
}
