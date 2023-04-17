import { Component } from '@angular/core';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  providers: [{ provide: 'ImagesService', useClass: CatsService }],
})
export class CatsComponent {}
