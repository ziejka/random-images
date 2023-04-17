import { Component, Inject, Input } from '@angular/core';
import { SavedService } from '../services/saved.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
})
export class SavedComponent {
  images: string[] = [];
  numberOfLoadedImages: number = 0;

  constructor(private readonly savedService: SavedService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.numberOfLoadedImages = 0;
    this.savedService.getImages().subscribe((images) => (this.images = images));
  }

  onImageLoaded(): void {
    this.numberOfLoadedImages++;
  }

  onImageClicked({ image }: { image: string }): void {
    this.images = this.images.filter((img) => img !== image);
    this.numberOfLoadedImages--;
    this.savedService.removeFromSavedImage(image);
  }
}
