import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverDirective]'
})
export class HoverDirectiveDirective {

  private preColor;
  constructor(private el:ElementRef) {  }

  @HostListener('mouseenter') onmouseenter(){
    this.highlightColor("darkcyan");
  }


  @HostListener('mouseleave') onmouseleave(){
    this.highlightColor(this.preColor);
  }

  public highlightColor(color:string){
    this.preColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = color;
  }
}
