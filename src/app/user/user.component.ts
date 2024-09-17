 import { Component, EventEmitter, Output, output } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { error } from 'console';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
name: string = 'Angular Demo';
password:string="";

subject = new  Subject<String>();

  
@Output()
userNameEmitter : EventEmitter<string> =new EventEmitter();
constructor(private userRegisterService: UserregisterService){
  this.subject.subscribe(data=> {
    console.log("from subject subscriber data value"+data);
  });
  

}


userDetails={
  name:'',
  email:'',
  address:'',
  mobile:'',
  age:'',
  gender:''
};
 
successMessage: string='';

register(from: any): void {
  this.subject.next("testing Subject in angular"+this.userDetails.name);
  this.userRegisterService.emitName(this.userDetails.name);
  this.userNameEmitter.emit(this.userDetails.name);
  this.subject.next("22222222");
  //var synchResponse = this.userRegisterService.learnSyncMethod(this.userDetails);
  
  this.userRegisterService.learnObservable().subscribe(
    data => {
      console.log(" from observable");
       
    }
  );


  var response = this.userRegisterService.registerUser(this.userDetails);
  response.subscribe(response=>{
    console.log("from subscribe of observable"+JSON.stringify(response));

  }, error => {
    console.log("from subscribe of observable error ");

  });
  console.log("registration is in progess"+ JSON.stringify(this.userDetails)+"response"+response)


  console.log(" registration is in progress "+JSON.stringify(this.userDetails));
}

}
