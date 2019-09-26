import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {EmployeeHomeComponent} from './components/employee-home/employee-home.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: EmployeeHomeComponent
      },
      {
        path: ':id',
        component: EmployeeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
}
