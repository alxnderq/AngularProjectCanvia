import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeesRoutingModule} from './employees-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {EmployeeHomeComponent} from './components/employee-home/employee-home.component';
import {AppCommonModule} from '../app-common/app-common.module';
import {MaterialModule} from '../material/material.module';
import {EmployeeSearchComponent} from './components/employee-search/employee-search.component';
import {EmployeeListItemComponent} from './components/employee-list-item/employee-list-item.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    EmployeeHomeComponent,
    EmployeeSearchComponent,
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeesModule {
}
