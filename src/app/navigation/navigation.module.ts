import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule
  ],
  bootstrap: [
    MainNavigationComponent
  ]
})
export class NavigationModule { }
