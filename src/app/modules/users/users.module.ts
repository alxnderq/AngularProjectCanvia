import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {AppCommonModule} from '../app-common/app-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserEditProfileComponent} from './components/user-edit-profile/user-edit-profile.component';
import {UserEditAccountComponent} from './components/user-edit-account/user-edit-account.component';

@NgModule({
  declarations: [
    LayoutComponent,
    UserEditComponent,
    UserEditProfileComponent,
    UserEditAccountComponent
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
