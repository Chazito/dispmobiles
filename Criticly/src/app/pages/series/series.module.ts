import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeriesPageRoutingModule } from './series-routing.module';
import { SeriesPage } from './series.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPageRoutingModule
  ],
  declarations: [SeriesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeriesPageModule { }
