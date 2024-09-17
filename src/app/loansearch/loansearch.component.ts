import { Component } from '@angular/core';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
 accountnumber: string='onwaybinding';
 searchaccount(){
  console.log("input account number"+this.accountnumber)
 }

}
