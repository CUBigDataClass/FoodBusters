import { Injectable } from '@angular/core';
import { Nightlife } from './nightlifeModel'


@Injectable({
  providedIn: 'root',
})
export class NightLifeServiceService {
  show: boolean = false;
  nighLife: Nightlife = null;
  showPanel(): void {
      this.show = true;
  }

  hidePanel(): void {
    this.show = false;
  }
  add(nighLife: Nightlife): void{
    this.nighLife = nighLife;
    console.log(this.nighLife);
  }

  constructor() { }
}
