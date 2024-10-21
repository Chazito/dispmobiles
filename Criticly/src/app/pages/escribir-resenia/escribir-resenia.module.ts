import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirReseniaPageRoutingModule } from './escribir-resenia-routing.module';

import { EscribirReseniaPage } from './escribir-resenia.page';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EscribirReseniaPageRoutingModule
  ],
  declarations: [EscribirReseniaPage]
})
export class EscribirReseniaPageModule { }
