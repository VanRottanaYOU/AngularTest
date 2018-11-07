import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TestMockService {
 public NomService : string = "Mock Test"
  constructor() { }

  doSomething() : number {
    //la méthode fait un appel d’api
    //return api.someSomething() ; Api n'existe pas
    /**
     * On va faire un Mock = Bouchonnage pour le tester
     */

    return 0;
    }
}
