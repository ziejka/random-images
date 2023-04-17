import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { ImagesComponent } from './images/images.component';
import { DogsComponent } from './dogs/dogs.component';
import { SavedComponent } from './saved/saved.component';

@NgModule({
  declarations: [AppComponent, CatsComponent, ImageComponent, ImagesComponent, DogsComponent, SavedComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
