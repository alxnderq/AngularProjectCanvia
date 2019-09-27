import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsersList(): Observable<any> {
    return this.httpClient.get('assets/data/users_list.json');
  }

  getUsersDetails(id: number): Observable<any> {
    return this.httpClient.get('assets/data/users_details.json');
  }
}
