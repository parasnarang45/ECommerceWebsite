import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( public sharedData:SharedService,private toastr:ToastrService,public router:Router){}
 frm1=new FormGroup({
  'email':new FormControl('',[Validators.email,Validators.required]),
  'password':new FormControl('',[Validators.required,Validators.minLength(4)])
 })
   f1(email:any,password:any)
   { 
    if(this.frm1.controls.email.valid && this.frm1.controls.password.valid){
    //console.log(this.frm1.value);
     let s1=this.frm1.value.email;
     let s2=this.frm1.value.password;
     let u=new Users();
     this.sharedData.getLogin(s1,s2).subscribe(data=>{
      if(data!=null){
        console.log(data);
        localStorage.setItem('token',JSON.stringify(data));
        this.sharedData.token=data;
        this.toastr.success('Login Successfully');
        this.router.navigate(['/home']);
        
      }
      else{
        this.toastr.error('Login Failed')
      }
     });

   }
}
}
