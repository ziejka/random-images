import { Observable } from 'rxjs';

export interface ImagesService {
  getImages(): Observable<string[]>;
}
