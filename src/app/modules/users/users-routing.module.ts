import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersDetailsComponent} from './components/users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UsersDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
