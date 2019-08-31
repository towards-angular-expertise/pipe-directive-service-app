import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) {
    console.log("Element",el);
    el.nativeElement.style.backgroundColor="green";
   }

}
