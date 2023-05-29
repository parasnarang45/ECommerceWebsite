import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './cart.service';
import { SharedService } from './shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=this.cart.getItems();
  supportLanguages=['en','bn','fr','de']
  blur:number=10;
  constructor(public toastr:ToastrService, public sharedData:SharedService,public cart:CartService,private ngxService:NgxUiLoaderService,public translate:TranslateService,private layout:LayoutService,private responsive:BreakpointObserver){
    this.translate.addLangs(this.supportLanguages);
    this.translate.setDefaultLang('en');
       const browserlang=this.translate.getBrowserLang();
     console.log(browserlang);
    translate.use('en');
    
  }
  title = 'App25';

   onselectLang(lang:any)
   { 
      console.log(lang);
      this.translate.use(lang);

     
   }
   ngOnInit():void{
    
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result=>{

      if (result.matches) {
        console.log("screens matches HandsetPortrait");
      }
    });

  
      
   }
}
