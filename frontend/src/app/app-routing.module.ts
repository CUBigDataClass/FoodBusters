import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LeafMapComponent } from './leaf-map/leaf-map.component';
import { AppComponent } from './app.component';
import { RefreshComponent } from './refresh/refresh.component';

const routes: Routes = [{
	path:"home",
	component: AppComponent
}, {
	path: "refresh",
	component: RefreshComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}