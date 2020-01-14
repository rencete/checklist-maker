import { NgModule } from '@angular/core';
import { CopiesDirective } from './copies.directive';



@NgModule({
  declarations: [CopiesDirective],
  exports: [
    CopiesDirective
  ]
})
export class UtilitiesModule { }
