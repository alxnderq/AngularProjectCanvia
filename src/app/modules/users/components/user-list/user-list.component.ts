import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  users: Array<any>;

  constructor(
    private service: UserService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getListUsers();
  }

  getListUsers() {
    const sub = this.service.getUsersList()
      .subscribe(result => {
        this.users = result.data;
      }, error => {
        console.log(error);
      }, () => {
        console.log('complete');
      });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
