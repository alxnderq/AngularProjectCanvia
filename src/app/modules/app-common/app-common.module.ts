import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    HeaderBarComponent
  ]
})
export class AppCommonModule {
}
