import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeafMapComponent } from './leaf-map/leaf-map.component';
<<<<<<< HEAD
import { SuggestionsComponent } from './suggestions/suggestions.component'
=======
import { InfoPanelComponent } from './info-panel/info-panel.component';

>>>>>>> d85d2e7e7a68d120de5d7604ef8a34a63eafa18d


@NgModule({

  declarations: [
    AppComponent,
    LeafMapComponent,
<<<<<<< HEAD
    SuggestionsComponent,
=======
    InfoPanelComponent,
>>>>>>> d85d2e7e7a68d120de5d7604ef8a34a63eafa18d
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  exports:[
    MatToolbarModule,
    HttpClientModule,
  ],

  providers: [  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
