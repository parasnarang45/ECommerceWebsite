import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  supportLanguages=['en','bn']
  data:any=[];
  items=this.cart.getItems();
  myProducts:any=[];
  constructor(public sharedData:SharedService,public cart:CartService,public http:HttpClient,public router:Router,public translate:TranslateService){
       for(let i=0;i<=this.items.length;i++){
        this.http.get<Product>("https://api.webroot.net.in/products.php?pid="+this.items[i]).subscribe(data=>{
          let pp = new Product()
          pp.pname=data.pname
          pp.pid=data.pid;
          pp.price=data.price;
          pp.details=data.details;
          pp.photo=data.photo;
          this.myProducts.push(pp);
          

        })
       }
       
  }
  onAdd(id:any,price:any)
  {
    this.cart.addCart(id,price);
    this.cart.itemsValue+parseInt(price)
  }
   onDelete(index:number,price:any)
   {
     this.items.splice(index,1);
     this.cart.itemsValue=this.cart.itemsValue-parseInt(price)
   }
    ngOnInit():void{
      this.translate.addLangs( this.supportLanguages);
      this.translate.setDefaultLang('en');
      const browserLang=this.translate.getBrowserLang();
      this.translate.use('en');
    }
   
}
