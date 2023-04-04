import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './cart.service';
import { SharedService } from './shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=this.cart.getItems();
  supportLanguages=['en','bn']
  blur:number=10;
  constructor(public toastr:ToastrService, public sharedData:SharedService,public cart:CartService,private ngxService:NgxUiLoaderService,public translate:TranslateService){
    this.translate.addLangs(this.supportLanguages);
    this.translate.setDefaultLang('en');
       const browserlang=this.translate.getBrowserLang();
     console.log(browserlang);
    translate.use('en');
    console.log('HOME.TITLE');
  }
  title = 'App25';


   ngOnInit():void{
  
   }
}
