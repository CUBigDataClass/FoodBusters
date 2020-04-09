import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeafMapComponent } from './leaf-map/leaf-map.component';
import { SuggestionsComponent } from './suggestions/suggestions.component'
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({

  declarations: [
    AppComponent,
    LeafMapComponent,
    SuggestionsComponent,
    InfoPanelComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
  ],

  exports:[
    MatToolbarModule,
    HttpClientModule,
  ],

  providers: [  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
