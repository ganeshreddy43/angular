import { Address } from "./Address";

export class Account {
    name: string;
    mobileNumber: string;
    pan: string;
    balance: number;
    accountNumber:string;
    address: Address;

    constructor(name:string,mobileNumber:string,pan:string,balance:number,accountNumber:string,address:Address

    ){
        this.name=name;
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.mobileNumber=mobileNumber;
        this.pan=pan;
        this.address=address;

    }
}