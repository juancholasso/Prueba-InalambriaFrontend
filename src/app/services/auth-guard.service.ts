import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor( public router: Router) {}

  canActivate(): boolean {
    var data = localStorage.getItem("session");
    if(data != null && data != undefined){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}