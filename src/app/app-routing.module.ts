import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PopularComponent } from './components/popular/popular.component';


const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full'},
  { path: 'popular', component: PopularComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
