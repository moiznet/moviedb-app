import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { BuscarComponent } from './buscar-component/buscar-component'; // Adjust the path as needed
import { DescubrirComponent } from './descubrir-component/descubrir-component'; // Adjust the path as needed
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BuscarComponent,
    DescubrirComponent
  ],
  exports:[
    
    BuscarComponent,
    DescubrirComponent
  ]
})
export class MyFeatureModule { }
