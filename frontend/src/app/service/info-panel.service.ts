import { Injectable } from '@angular/core';
import { Business } from '../businessModel';


@Injectable({
  providedIn: 'root',
})
export class InfoPanelService {
  show: boolean = false;
  business: Business = null;
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



  constructor() { }
}
