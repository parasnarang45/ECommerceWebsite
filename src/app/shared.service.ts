import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  token:string="";
  constructor(public http:HttpClient) { }

   getProducts():Observable<Product[]>
   {
    var result= this.http.get<Product[]>("https://api.webroot.net.in/products.php")
    return result;
   }
   getLogin(email:any,password:any):Observable<any>
    {  var result=
      this.http.post<Users>('https://reqres.in/api/login',{email,password})
      return result;
    }
    isLoggedin()
    { 
       var result=
      localStorage.getItem('token')!=null;
      return result;
    }

   notLoggedin()
   { var result=
    localStorage.getItem('');
    return result;
   }
}
