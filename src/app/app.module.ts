import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './directives/test-directive.directive';
import { TestMockService} from './services/test-mock.service'

@NgModule({
  declarations: [
    AppComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
