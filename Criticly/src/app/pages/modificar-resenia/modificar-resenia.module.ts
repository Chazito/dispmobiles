import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarReseniaPageRoutingModule } from './modificar-resenia-routing.module';

import { ModificarReseniaPage } from './modificar-resenia.page';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ModificarReseniaPageRoutingModule
  ],
  declarations: [ModificarReseniaPage]
})
export class ModificarReseniaPageModule { }
