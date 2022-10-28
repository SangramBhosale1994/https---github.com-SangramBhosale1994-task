import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() times= "1";

  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    console.log(this.times);
    if (this.times == "1")
    this.el.nativeElement.style.backgroundColor = "green";
  else if (this.times == "5")
    this.el.nativeElement.style.backgroundColor = "red";
  else
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

}
