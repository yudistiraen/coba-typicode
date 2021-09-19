import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    // console.log('login ini', )
    let result = this.http.get<any>(`${this.apiUrl}/posts`, httpOptions);
    console.log('getPosts')
    return result;
  }

  getTotalComents(id: Number): Observable<any>{
    // console.log('login ini', )
    let result = this.http.get<any>(`${this.apiUrl}/posts/${id}/comments`, httpOptions);
    console.log('getPosts')
    return result;
  }

}
