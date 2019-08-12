import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { MatFormFieldModule, MatStepperModule, MatInputModule } from '@angular/material';
import { CvsFormComponent } from './cvs-form/cvs-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/form/address/address.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    CvsFormComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
