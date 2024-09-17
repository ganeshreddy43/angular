import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private httpClint: HttpClient) { 

  }
  searchaccount(accountNumber:any): Observable<any>{
    const httpHeaders ={
      headers:new HttpHeaders({
       'companyname':'Neoteric',
       'Content-Type':'application/json',
       'Accept':'application/json'
      })
     };
     return this.httpClint.post("http://localhost:4200/searchaccount",httpHeaders);
  }
}

