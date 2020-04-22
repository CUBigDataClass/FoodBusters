import { Component } from '@angular/core';
import { InfoPanelService } from './service/info-panel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  ngOnInit() { }
}

