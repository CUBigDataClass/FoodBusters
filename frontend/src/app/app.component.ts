import { InfoPanelService } from './service/info-panel.service';
import { Component, Output, Input, HostListener, OnDestroy, Inject } from '@angular/core';

import { LeafMapComponent } from './leaf-map/leaf-map.component';

import {Router} from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Home';

	// constructor(
	//   @Inject(DOCUMENT) private _document: Document
	// ) {}
	// refreshPage(){
		// 	window.location.reload();
		// }
	constructor(public _router: Router, public _location: Location){}

	// refresh():void {
	// 	this._router.navigateByUrl("/refresh", {skipLocationChange:true}).then(() => {
	// 		console.log(decodeURI(this._location.path()));
	// 		this._router.navigate([decodeURI(this._location.path())]);
	// 	});
	// }


	ngOnInit() {
		this._router.navigate(['']) }
}

