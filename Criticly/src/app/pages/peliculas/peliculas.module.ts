import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PeliculasPageRoutingModule } from './peliculas-routing.module';
import { PeliculasPage } from './peliculas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule
  ],
  declarations: [PeliculasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeliculasPageModule { }
