import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { UserListComponent } from './user/user-list/user-list.component';
import { AppShellModule } from '@angular/app-shell';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppShellModule.runtime(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
