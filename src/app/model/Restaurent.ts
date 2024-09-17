import { Address } from "./Address";
import { Rating } from "./Rating";
export class Restaurent{
    name:string;
    address:Address;
    rating:Rating;
    constructor(name:string,address:Address,rating:Rating){
        this.name=name;
        this.address=address;
        this.rating=rating;
    }
}