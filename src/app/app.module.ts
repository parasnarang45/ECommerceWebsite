import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { MatStepperModule } from '@angular/material/stepper';
import { InformationComponent } from './information/information.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    LogoutComponent,
    ProductdetailsComponent,
    CartComponent,
    HomeComponent,
    EmptyCartComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    NgxUiLoaderModule,
    AngularSvgIconModule.forRoot({
  
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
        useFactory: (http:HttpClient)=>{ return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
          deps: [HttpClient]
      }
  }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    NgxUiLoaderRouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
