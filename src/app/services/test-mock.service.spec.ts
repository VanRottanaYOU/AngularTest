import { TestBed,inject } from '@angular/core/testing';

import { TestMockService } from './test-mock.service';

describe('TestMockService', () => {
  let testService : TestMockService;

  beforeEach(() =>{
    let mockTestSercice = {
      NomService : 'M2i Mock',
      doSomething : () => {return 5;}
    };
    /**
     * Configuration 
     */
    TestBed.configureTestingModule({
      providers : [{ provide:TestMockService, useValue:mockTestSercice}]

    });
    /**
     * Affectation du 'mock' à testService
     */
    testService = TestBed.get(TestMockService);
  }
    
  );

  it('Test de la mise en place du bouchonnage', () => {
    //const service: TestMockService = TestBed.get(TestMockService);
    expect(testService).toBeTruthy();
    expect(testService.doSomething()).toEqual(5);
  });
});
