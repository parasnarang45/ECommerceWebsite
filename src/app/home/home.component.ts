import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any=[];
   items=this.cart.getItems()
   constructor(public http:HttpClient,public sharedData:SharedService,public cart:CartService,public toastr:ToastrService,public router:Router){}

   ngOnInit(): void {
    this.sharedData.getProducts().subscribe(data=>{
      console.log(data);
      this.products=data;
    })

    }
    addCart(id:any,price:any)
    {
      console.log(this.products[id]);
      //this.cart.addToCart(id,price);
     this.cart.addCart(id,price);
      console.log(price);
      console.log(id,price);
      console.log(this.cart.getItems().length);
      localStorage.setItem('this.cart.getItems()',JSON.stringify(this.cart.getItems()))
       //this.toastr.warning(' Product added to the cart!');
   
   this.router.navigate(['/product-details']);
 
   
 
  }
}
