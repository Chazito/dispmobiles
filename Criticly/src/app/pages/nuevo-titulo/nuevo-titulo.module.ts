import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTituloPageRoutingModule } from './nuevo-titulo-routing.module';

import { NuevoTituloPage } from './nuevo-titulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTituloPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [NuevoTituloPage]
})
export class NuevoTituloPageModule { }
