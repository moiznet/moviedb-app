import { Routes } from '@angular/router';
import { BuscarComponent } from './my-feature/buscar-component/buscar-component'; // Adjust the path as needed
import { DescubrirComponent } from './my-feature/descubrir-component/descubrir-component'; // Adjust the path as needed
export const routes: Routes = [

     { path: 'buscar', component: BuscarComponent },
      { path: 'descubrir', component: DescubrirComponent }
];
