import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
// import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    ValidationMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidationMessageComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule { }
