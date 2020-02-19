import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  userAuth(username, password){
    if(username === 'admin' && password === 'admin'){
    //  console.log('entered in if block - auth');
      return true;

    }else{
    //  console.log('entered in else block - auth');
      return false;
    }
  }
}
