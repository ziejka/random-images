import { Component } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  providers: [{ provide: 'ImagesService', useClass: DogsService }],
})
export class DogsComponent {}
