import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeafMapComponent } from './leaf-map/leaf-map.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }