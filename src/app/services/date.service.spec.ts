import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service).toBeTruthy();
    //Test si currentDate = new Date()
    expect(service.currentDate).toEqual(new Date())
  });
});

/**
 * Test getDate
 */
  it('should be date du jour', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service).toBeTruthy();
    //Test si currentDate = new Date()
    expect(service.getDateDuJour() instanceof Date).toBe(true)
    expect(service.getDateDuJour()).toEqual(new Date())
  });

/**
 * Test getHeure
 */
  it('should be current hour', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service).toBeTruthy();
    //Test dy type de getHeure
    expect(typeof service.getHeure() === 'number').toBe(true)
  });