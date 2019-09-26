import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {

  filter: string;

  constructor() {
  }

  ngOnInit() {
  }

  applyFilter($event: string) {
    this.filter = $event;
  }

}
