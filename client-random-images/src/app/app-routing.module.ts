import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { SavedComponent } from './saved/saved.component';

// As improvement those components could be change do Modules and lazy loaded
const routes: Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'saved', component: SavedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
