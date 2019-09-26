import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {AppCommonModule} from '../app-common/app-common.module';
import {UsersCreateComponent} from './components/users-create/users-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    LayoutComponent,
    UsersCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppCommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {
}
