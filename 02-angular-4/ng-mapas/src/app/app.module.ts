import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MapasComponent } from './mapas/mapas.component';
import { MapasService } from './mapas/mapas.service';
import { MapasDirective } from './mapas.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapasComponent,
    MapasDirective
  ],
  imports: [  
    BrowserModule,
    HttpModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
