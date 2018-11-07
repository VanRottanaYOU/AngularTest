import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathService = TestBed.get(MathService);
    expect(service).toBeTruthy();
  });

  it('test increment', () => {
    const service: MathService = TestBed.get(MathService);
    
    //Première incrémente
    service.incrementeCount();
    expect(service.count).toEqual(1);

    //Seconde incrémente
    service.incrementeCount();
    expect(service.count).toEqual(2);

    
  });

  it('test decrement', () => {
    const service: MathService = TestBed.get(MathService);
    //Incrémente
    service.incrementeCount();
    //Décrémente
    service.decrementeCount();
    expect(service.count).toEqual(0);

    //Test si on est pas en dessous de 0
    service.decrementeCount();
    expect(service.count).not.toBeLessThan(0);
  });

});
