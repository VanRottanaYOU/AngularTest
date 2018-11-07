import { Component } from '@angular/core';
import { TestMockService } from './services/test-mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projet des tests IT';
  author = 'cge';
  version =1.0; 
  nameService = "";

  constructor(private mock:TestMockService) {

  }

  getNameService(){
    return this.nameService =  document.getElementById("service").innerHTML
  }

}
