import { Injectable } from '@angular/core';
import { Business } from '../businessModel';
import { Nightlife } from '../nightlifeModel'


@Injectable({
  providedIn: 'root',
})
export class InfoPanelService {
  show: boolean = false;
  business: Business = null;
  nighLife: Nightlife = null;
  showPanel(): void {
      this.show = true;
      console.log("showPanel is ", this.show);
  }

  hidePanel(): void {
    this.show = false;
    console.log("hidePanel is ", this.show);
  }
  add(business: Business): void{
    this.business = business;
    console.log(this.business);
  }

  constructor() { }
}
