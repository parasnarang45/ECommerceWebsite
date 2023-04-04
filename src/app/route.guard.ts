import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  
  constructor(public sharedData:SharedService,public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
     if(!this.sharedData.isLoggedin())
     {
      console.log('canActivateCalled');
      
      return true;
     }
  
   else{
        this.router.navigate(['/home']);
       return false;
   }
    }
}
