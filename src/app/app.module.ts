import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';
import { CustomButtonTooltipDirective } from './common/custom-button-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipTestComponent,
    CustomButtonTooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
