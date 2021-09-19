import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  login(payload: any): Observable<any>{
    console.log('login ini', payload)
    let result = this.http.post<any>(this.apiUrl, payload, httpOptions);
    console.log('result', result)
    return result;
  }
}
