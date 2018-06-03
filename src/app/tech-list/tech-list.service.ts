import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TechListService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getTechList(userId): Observable<Tech[]> {
    return this.http.get<Tech[]>('')
=======
  gettechList(userId) {
    return this.http.get('')
>>>>>>> f31a9d97a32080c6c7c1b9b8fd5bfb11145e2ef2
      .pipe(
        catchError(this.handleError('getTechList', []))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
