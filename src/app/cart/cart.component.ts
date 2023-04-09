import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { SharedService } from '../shared.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 supportLanguages=['en','bn']
  data:any=[];
  items=this.cart.getItems();
  myProducts:any=[];
  constructor(public sharedData:SharedService,public cart:CartService,public http:HttpClient,public translate:TranslateService,public router:Router){
       for(let i=0;i<=this.items.length;i++){
        this.http.get<Product>("https://api.webroot.net.in/products.php?pid="+this.items[i]).subscribe(data=>{
          let pp = new Product()
          pp.pname=data.pname;
          pp.pid=data.pid;
          pp.price=data.price;
          pp.details=data.details;
          pp.photo=data.photo;
          this.myProducts.push(pp);
          

        })
       }
      }
      ngOnInit():void{
        this.translate.addLangs(this.supportLanguages);
        this.translate.setDefaultLang('en');
         const browserLang=this.translate.getBrowserLang();
         this.translate.use('en');
      }
      onCheckout()
      {
        this.router.navigate(['/information']);
      }
}
