import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routingComponents } from './app-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NavbarService} from './navbar-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    routingComponents,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ NavbarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
