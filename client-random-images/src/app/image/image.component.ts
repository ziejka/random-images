import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() isSaved = false;
  @Input() image!: string;

  @Output() imageLoaded = new EventEmitter<boolean>();
  @Output() imageClicked = new EventEmitter<{
    image: string;
    isSaved: boolean;
  }>();

  setLoaded() {
    this.imageLoaded.emit(true);
  }

  onClick() {
    this.isSaved = !this.isSaved;
    this.imageClicked.emit({ image: this.image, isSaved: this.isSaved });
  }
}
