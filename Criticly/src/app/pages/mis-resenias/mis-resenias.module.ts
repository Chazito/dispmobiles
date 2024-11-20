import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisReseniasPageRoutingModule } from './mis-resenias-routing.module';

import { MisReseniasPage } from './mis-resenias.page';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MisReseniasPageRoutingModule
  ],
  declarations: [MisReseniasPage]
})
export class MisReseniasPageModule { }
