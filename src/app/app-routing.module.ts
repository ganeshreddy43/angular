import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AadharrNumberComponent } from './aadharr-number/aadharr-number.component';
import { VoteridComponent } from './voterid/voterid.component';
import { PanCardComponent } from './pan-card/pan-card.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'register',component:TemplateDrivenComponentComponent},
  {path:'password',component:ForgotpasswordComponent},
  {path:'aadharr',component:AadharrNumberComponent},
  {path:'voterid',component:VoteridComponent},
  {path:'panCard',component:PanCardComponent},
  {path:'addRestaurent',component:RestaurentComponent},
  {path:'createaccount',component:CreateaccountComponent},
  {path:'searchaccount',component:LoansearchComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
