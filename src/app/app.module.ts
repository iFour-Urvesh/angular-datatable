import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';

import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    DetailGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
