import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { DocumentModule } from '../document/document.module';

@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AngularMaterialModule,
    DocumentModule
  ],
  bootstrap: [
    MainNavigationComponent
  ]
})
export class NavigationModule { }
