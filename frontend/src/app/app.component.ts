import { InfoPanelService } from './service/info-panel.service';
import { Component, Output, Input, HostListener, OnDestroy, Inject } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

import {Router} from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';



@Component({
	animations: [
		trigger('ipInsertRemoveTrigger', [
		  transition(':enter', [
			// style({ transform: 'translateX(0%)' }),
			// animate(100, style({ transform: 'translateX(-100%)'}))
			style({width: 0}),
			animate(150, style({width: '*'})),
		  ]),
		  transition(':leave', [
			// animate(100, style({ transform: 'translateX(-100%)'}))
			// animate('5s', style({ opacity: 0 }))
			style({width: '*'}),
			animate(150, style({width: 0})),
		  ])
		])
	  ],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Home';
	show: boolean = true;

	// constructor(
	//   @Inject(DOCUMENT) private _document: Document
	// ) {}
	// refreshPage(){
		// 	window.location.reload();
		// }
	constructor(public _router: Router, public _location: Location, public infoPanelService: InfoPanelService){}

	// refresh():void {
	// 	this._router.navigateByUrl("/refresh", {skipLocationChange:true}).then(() => {
	// 		console.log(decodeURI(this._location.path()));
	// 		this._router.navigate([decodeURI(this._location.path())]);
	// 	});
	// }


	ngOnInit() {
		this._router.navigate(['']) }
}

