import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly API_COUNTRIES: string = 'https://restcountries.eu/rest/v2/all';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getListCountries(): Observable<any> {
    return this.httpClient.get(this.API_COUNTRIES);
  }
}
