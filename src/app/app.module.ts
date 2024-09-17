import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MaskDirective } from './mask.directive';
import { AadharrNumberComponent } from './aadharr-number/aadharr-number.component';
import { VoteridComponent } from './voterid/voterid.component';
import { PanCardComponent } from './pan-card/pan-card.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

//import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpasswordComponent,
    MaskDirective,
    AadharrNumberComponent,
    VoteridComponent,
    PanCardComponent,
    AddressComponent,
    UserComponent,
    RestaurentComponent,
    CreateaccountComponent,
    LoansearchComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
