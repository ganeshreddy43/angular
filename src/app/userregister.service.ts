import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class UserregisterService {
  userNameBehaviorSubject = new BehaviorSubject<string>('Neoteric');

  emitName(name:any):void{
    this.userNameBehaviorSubject.next(name);
  }
  


  constructor(private http: HttpClient) {
    console.log("from constructor in UserregisterService ");

  }

  learnObservable(): Observable<string>{

   return new Observable<string>(observer =>{
    console.log('Observer executed');
    setTimeout(() => observer.next ('Neoteric')
      
    , 6000);
    

   });

  }


registerUser(user: any): Observable<object>{
  console.log('in Service'+ JSON.stringify(user));
  
  //method
  //path
  //protocol
  //headers
  //body
  const httpHeaders ={
   headers:new HttpHeaders({
    'companyname':'Neoteric',
    'Content-Type':'application/json',
    'Accept':'application/json'
   })
  };
  return this.http.post("http://localhost:8080/api/registerUser",user,httpHeaders);

  
}
}