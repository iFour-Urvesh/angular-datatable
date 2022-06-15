import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
