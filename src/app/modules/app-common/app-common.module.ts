import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {MaterialModule} from '../material/material.module';
import { HeaderBarBackComponent } from './components/header-bar-back/header-bar-back.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    HeaderBarBackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    HeaderBarComponent,
    HeaderBarBackComponent
  ]
})
export class AppCommonModule {
}
