import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  user: User;
  loading: boolean;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.loading = true;
    const sub = this.userService.getUser()
      .subscribe(result => {
        this.user = result;
      }, error => {
        console.log(error);
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
