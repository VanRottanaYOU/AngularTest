import { TestBed, inject } from '@angular/core/testing';

//import { Date.InjectService } from './date.inject.service';
import { DateService } from './date.service';

describe('Injection du service Date', () => {
  //variable globale pour les IT
  let mockDateService:DateService;

  beforeEach(() =>{ 
    let mockTestDate = {
      currentDate : new Date(),
      getDateDuJour : () => { return (new Date()); } ,
      getHeure : () => { return (new Date().getTime()); } 
    };

    TestBed.configureTestingModule({
    providers : [{provide:DateService, useValue : mockTestDate}]
    });

     mockDateService = TestBed.get(DateService);

  });

  //Test de l'injection du Service
  it('Test de la mise en place du bouchonnage', () => {
    //const service: TestMockService = TestBed.get(TestMockService);
    expect(mockDateService).toBeTruthy();
    expect(mockDateService.getDateDuJour()).toEqual(new Date());
    expect(mockDateService.getHeure()).toEqual(new Date().getTime());
  });

});
