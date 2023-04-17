import { Injectable } from '@angular/core';
import { ImagesService } from '../images/image.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { handleError } from './handleError';

@Injectable({
  providedIn: 'root',
})
export class DogsService implements ImagesService {
  // this should be set from env variable
  private catsUrl = 'http://localhost:3000/dogs';

  constructor(private http: HttpClient) {}

  getImages(): Observable<string[]> {
    return this.http.get<string[]>(this.catsUrl).pipe(catchError(handleError));
  }
}
