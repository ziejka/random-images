import { Component, Inject, Input } from '@angular/core';
import { ImagesService } from './image.service.interface';
import { SavedService } from '../services/saved.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent {
  images: string[] = [];
  numberOfLoadedImages: number = 0;
  @Input() disabled?: boolean;
  @Input() title!: string;

  constructor(
    @Inject('ImagesService') private readonly imagesService: ImagesService,
    private readonly savedService: SavedService
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.numberOfLoadedImages = 0;
    this.imagesService
      .getImages()
      .subscribe((images) => (this.images = images));
  }

  onImageLoaded(): void {
    this.numberOfLoadedImages++;
  }

  onImageClicked({
    image,
    isSaved,
  }: {
    image: string;
    isSaved: boolean;
  }): void {
    if (isSaved) {
      this.savedService.saveImage(image);
    } else {
      this.savedService.removeFromSavedImage(image);
    }
  }
}
