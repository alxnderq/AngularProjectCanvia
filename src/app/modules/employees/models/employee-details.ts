import {Employee} from './employee';

export interface EmployeeDetails extends Employee {
  workPhone: number;
  mobilePhone: number;
  email: string;
}
