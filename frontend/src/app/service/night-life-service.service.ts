import { Injectable } from '@angular/core';
import { Nightlife } from '../nightlifeModel'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NightLifeServiceService {
  show: boolean = false;
  nighLife: Nightlife = null;
  isNightlife: Boolean;
  isNightlifeChange: Subject<Boolean> = new Subject<Boolean>();

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

  change(value) {
    this.isNightlife = value;
    this.isNightlifeChange.next(this.isNightlife);
  }

  constructor() { 
    this.isNightlife = false;
  }
}
