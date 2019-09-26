import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  @Output() applyFilter: EventEmitter<string> = new EventEmitter<string>();

  textFilter: string;

  constructor() {
  }

  ngOnInit() {
  }

  onKeyupFilter() {
    this.applyFilter.emit(this.textFilter);
  }

}
