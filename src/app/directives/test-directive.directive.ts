import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[testDirective]'
})
export class TestDirectiveDirective {
  value : string;
  @Input()
  set testDirective(val :string) {
    this.value = val;
  }
  constructor() { }

}
