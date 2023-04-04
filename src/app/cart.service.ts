import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  
  items:Product[]=[];
  itemsValue=0;
    
   addCart(id:any,price:any)
   {
     this.items.push(id);
     this.itemsValue=this.itemsValue+parseInt(price);
     
   }
    delete(id:any,price:any)
   {
    this.itemsValue=this.itemsValue-parseInt(price)
   }

   getItems()
   {
     
    return this.items;
   }
    clearItems()
    {
      this.items=[];
      
    }
}
