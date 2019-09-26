import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeDetails} from '../../models/employee-details';
import {EmployeeService} from '../../services/employee.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  private id: number;
  private subscription: Subscription = new Subscription();

  employee: EmployeeDetails;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EmployeeService
  ) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.initParams();
    this.getRouteParams();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.getEmployeeDetails();
  }

  initParams() {
    this.loading = true;
  }

  getRouteParams() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
  }

  getEmployeeDetails() {
    this.loading = true;
    const sub = this.service.getEmployeeDetails(this.id)
      .subscribe(result => {
        this.employee = result;
      }, error => {
        console.log(error);
      }, () => {
        this.loading = false;
      });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
