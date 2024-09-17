import { Directive,HostListener,Input, Output } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
  @Input ()
  appMask: string = '';
  @Output()
  maskData: string='********'; 


  constructor() { }
@HostListener("mouseenter")
mouseEnter(){
  console.log("Enter into the mouse enter method"+this.appMask) 
}

@HostListener("mouseleave")
mouseOut(){
  console.log("Enter into the mouseLeave method"+this.maskData)
  
  
}

@HostListener("mouseover")
mouseover(){
  console.log("Enter into the mouse over method"+ this.appMask)
}

}
