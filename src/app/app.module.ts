import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { LoginComponent } from 'src/app/UI/UI/HOME/login/login.component';
import { NavigationComponent } from 'src/app/UI/UI/HOME/navigation/navigation.component';
import { LoansComponent } from 'src/app/UI/UI/LOANS/loans/loans.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './UI/UI/HOME/dashboard/dashboard.component';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { RoomUnitAllocationComponent } from './UI/UI/propertysetup/room-unit-allocation/room-unit-allocation.component';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
