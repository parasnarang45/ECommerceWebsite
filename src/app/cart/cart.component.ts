import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  data:any=[];
  items=this.cart.getItems();
  myProducts:any=[];
  constructor(public sharedData:SharedService,public cart:CartService,public http:HttpClient){
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
}
