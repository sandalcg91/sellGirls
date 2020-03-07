import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityProtectionService implements CanActivate {

  constructor(private auth: AuthenticationService, private route: Router) { }

  canActivate(ActivatedRouteSnapshot, RouterStateSnapshot) {

    if(this.auth.loggedIn()){
      return true;
    }else{
      this.route.navigate(['login']);
      return false;
    }

  }

  
}
