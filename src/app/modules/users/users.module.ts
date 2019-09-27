import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {AppCommonModule} from '../app-common/app-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserEditProfileComponent} from './components/user-edit-profile/user-edit-profile.component';
import {UserEditAccountComponent} from './components/user-edit-account/user-edit-account.component';
import {UserListComponent} from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserEditProfileComponent,
    UserEditAccountComponent,
    UserListComponent
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
