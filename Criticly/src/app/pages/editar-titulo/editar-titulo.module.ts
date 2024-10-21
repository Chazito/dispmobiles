import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTituloPageRoutingModule } from './editar-titulo-routing.module';

import { EditarTituloPage } from './editar-titulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTituloPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [EditarTituloPage]
})
export class EditarTituloPageModule { }
