import { Injectable } from '@angular/core';
import { Business } from './businessModel';
import { Nightlife } from './nightlifeModel'


@Injectable({
  providedIn: 'root',
})
export class InfoPanelService {
  show: boolean = false;
  business: Business = null;
  nighLife: Nightlife = null;
  showPanel(): void {
      this.show = true;
  }

  hidePanel(): void {
    this.show = false;
  }
  add(business: Business): void{
    this.business = business;
    console.log(this.business);
  }

  add2(nighLife:Nightlife): void{
    this.nighLife = nighLife;
    console.log(this.nighLife);
  }

  constructor() { }
}
