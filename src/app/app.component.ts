import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';
  fullNameFromchild:string='';
  constructor(private router:Router,
    private  userRegister: UserregisterService
  ){
    this.userRegister.userNameBehaviorSubject.subscribe(
      data => {
      this.fullNameFromchild=data;
      console.log('from AppComponet subscribe ');

      
    })
  }
  form(){
    this.router.navigate(['register']);
  }
  Forgotpassword(){
    
  }
}
