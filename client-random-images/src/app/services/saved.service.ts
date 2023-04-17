import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ImagesService } from '../images/image.service.interface';
import { handleError } from './handleError';

@Injectable({
  providedIn: 'root',
})
export class SavedService implements ImagesService {
  private savedUrl = 'http://localhost:3000/saved';
  private userID = 'user123';

  constructor(private http: HttpClient) {}

  getImages(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.savedUrl}/${this.userID}`)
      .pipe(catchError(handleError));
  }

  saveImage(imageUrl: string) {
    this.http
      .post<string>(`${this.savedUrl}/${this.userID}`, { imageUrl })
      .pipe(catchError(handleError))
      .subscribe((data) => {
        console.log(data);
      });
  }

  removeFromSavedImage(imageUrl: string) {
    this.http
      .delete<string>(`${this.savedUrl}/${this.userID}`, { body: { imageUrl } })
      .pipe(catchError(handleError))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
