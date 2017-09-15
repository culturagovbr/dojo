import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapasComponent } from './mapas/mapas.component';
import { MapasService } from './mapas.service';

@NgModule({
  declarations: [
    AppComponent,
    MapasComponent
  ],
  imports: [  
    BrowserModule,
    HttpClientModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
