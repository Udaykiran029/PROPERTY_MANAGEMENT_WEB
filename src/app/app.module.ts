import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { LoginComponent } from 'src/app/UI/HOME/login/login.component';
import { NavigationComponent } from 'src/app/UI/HOME/navigation/navigation.component';
import { LoansComponent } from 'src/app/UI/LOANS/loans/loans.component';
import { ShareModule } from './UI/COMMON/share.module';
import { DashboardComponent } from './UI/HOME/dashboard/dashboard.component';
import { RoomUnitAllocationComponent } from './UI/propertysetup/room-unit-allocation/room-unit-allocation.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ValidationMessageComponent } from './validation-message/validation-message.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    LoansComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    NgSelectModule,
    CommonModule,
    ShareModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      // positionClass: 'toast-bottom-right',
      positionClass: 'toast-top-right',
    }),
    BrowserAnimationsModule,
    ToastNoAnimationModule
  ],
  providers: [
    { provide: BsDatepickerConfig },],
  bootstrap: [AppComponent,RoomUnitAllocationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  // exports:[ValidationMessageComponent]
})
export class AppModule { }
