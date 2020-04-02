import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeafMapComponent } from './leaf-map/leaf-map.component';



@NgModule({

  declarations: [
    AppComponent,
    LeafMapComponent,
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

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
