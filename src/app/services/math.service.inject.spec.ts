import { TestBed,inject } from '@angular/core/testing';

import { MathService } from './math.service';

describe('Inject to MathService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers : [MathService]
  }));
 
 /**
  * Test l'injection du Service en tant que provider
  * pour vérifier s'il est instanciable en tant que service
  * (injectable) 
  * Utilisation de la méthode (done) : inject
  */
  it('Inject, it\'s true', inject([MathService],(service:Math) => {
    expect(service).toBeTruthy();

  }));

});
