import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  count  :number;
  constructor() { this.count = 0}

  incrementeCount() {
    this.count ++;
  }

  decrementeCount() {
    if(this.count > 0)    this.count --;
  }


}
