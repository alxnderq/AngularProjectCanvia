import {Component, OnInit} from '@angular/core';
import {Select} from '../../../../@common/models/select';

export const GENDER = [
  {
    id: 1,
    description: 'Male'
  },
  {
    id: 2,
    description: 'Female'
  }
];

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  listGender: Array<Select> = GENDER;

  constructor() {
  }

  ngOnInit() {
  }

}
