import { Component } from '@angular/core';
import { Restaurent } from '../model/Restaurent';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrl: './restaurent.component.css'
})
export class RestaurentComponent {
address: any;
addRestaurent() {
throw new Error('Method not implemented.');
}
restaurent=new Restaurent('', new Address('', '', '', '', ''),
  new Rating(0, ''));
  addRestuarent():void{
    console.log("from Restaurent")
  }

}
