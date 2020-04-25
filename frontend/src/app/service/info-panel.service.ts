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
  open: boolean = true;
  showPanel(): void {
      this.show = true;
      console.log("showPanel is ", this.show);
  }

  hidePanel(): void {
    this.show = false;
    this.open = true;
    console.log("hidePanel is ", this.show);
  }
  add(business: Business): void{
    this.open = false;
    this.business = business;
    // console.log(this.business);
  }

  addNightLife(nighLife: Nightlife): void{
    this.open = false;
    this.nighLife = nighLife;
  }

  // addNightLife(nighLife: Nightlife): void{
  //   this.open = false;
  //   this.nighLife = nighLife;
  // }

  constructor() { }
}
