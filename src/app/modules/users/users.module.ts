import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {AppCommonModule} from '../app-common/app-common.module';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';

@NgModule({
  declarations: [
    LayoutComponent,
    UsersListComponent,
    UsersDetailsComponent,
    UsersCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppCommonModule
  ]
})
export class UsersModule {
}
