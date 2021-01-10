import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  uri = "https://reqres.in/api/users";

 getEmployees(): Observable<any> {
    return this.http.get(this.uri, this.options);
    // TODO: Load data from backend service
  }

  options: {
    headers?: HttpHeaders,
    observe?: 'body',
    params?: HttpParams,
    reportProgress?: true,
    responseType?: 'json',
    withCredentials?: false,
  }
}