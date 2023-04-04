import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
 
  constructor(public sharedData:SharedService,public router:Router, private NgxService :NgxUiLoaderService){
   localStorage.removeItem('token');
   this.router.navigate(['/login']);
  }
  ngOnInit():void{
    
    this.NgxService.start();
   
  }
}
