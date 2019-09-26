import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {

  @Input() employee: Employee;

  constructor() {
  }

  ngOnInit() {
  }

}
