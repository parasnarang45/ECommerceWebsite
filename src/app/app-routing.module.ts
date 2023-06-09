import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouteGuard } from './route.guard';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [{path:'login',component:LoginComponent,canActivate:[RouteGuard]},
                        {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
                        {path:'product-details',component:ProductdetailsComponent},
                        {path:'logout',component:LogoutComponent},
                        {path:'cart',component:CartComponent},
                        {path:'empty-cart',component:EmptyCartComponent},
                        {path:'information',component:InformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
