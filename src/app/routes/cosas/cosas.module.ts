import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosasRoutingModule } from './cosas-routing.module';
import { CosasComponent } from './cosas.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListaComponent } from './lista/lista.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../core/shared/shared.module";
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    CosasRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [CosasComponent, BuscarComponent, ListaComponent, NuevoComponent]
})
export class CosasModule { }
