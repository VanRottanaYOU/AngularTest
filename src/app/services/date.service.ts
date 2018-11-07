import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  currentDate : Date;

  constructor() { 
    this.currentDate = new Date();
  }

  getDateDuJour() : Date{
    return new Date();
  }

  getHeure() : Number{
    return new Date().getTime();
  }

}
