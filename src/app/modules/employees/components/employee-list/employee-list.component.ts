import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Subscription} from 'rxjs';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  private subscription: Subscription = new Subscription();

  // Declare @Input()
  @Input() filter: string;

  data: Array<Employee>;
  employees: Array<Employee>;

  // Variables to define states in components
  loadingList: boolean;

  constructor(
    private service: EmployeeService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getListEmployees();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterList();
  }

  getListEmployees() {
    this.loadingList = true;
    const sub = this.service.getListEmployees()
      .subscribe(result => {
        this.data = result.data;
      }, error => {
        console.log(error);
      }, () => {
        this.loadingList = false;
        this.renderListEmployees();
      });
    this.subscription.add(sub);
  }

  renderListEmployees() {
    this.employees = [...this.data];
  }

  filterList() {
    if (this.data) {
      const list = [...this.data].filter(item => {
        return item.name.includes(this.filter) || item.job.includes(this.filter);
      });
      this.employees = [...list];
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
