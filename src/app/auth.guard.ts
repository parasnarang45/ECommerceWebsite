import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public sharedData:SharedService,public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('canActivateCalled');
      if(this.sharedData.isLoggedin())
      {
         return true;
      }
      else{
           this.router.navigate(['/login']);
        return false;
      }
      }
    }
