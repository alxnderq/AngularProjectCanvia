import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EmployeeDetails} from '../models/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getListEmployees(): Observable<any> {
    return this.httpClient.get('assets/data/list_employees.json');
  }

  getEmployeeDetails(id: number): Observable<EmployeeDetails> {
    return this.httpClient.get<EmployeeDetails>('assets/data/employee_details.json');
  }
}
