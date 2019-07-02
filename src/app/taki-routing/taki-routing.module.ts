import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './../components/nav/nav.component';
import { InicioComponent } from './../components/inicio/inicio.component';
import { CancionComponent } from './../components/cancion/cancion.component';


const routes: Routes = [
  {
    path: '', 
    component: InicioComponent
  },
  {
    path: 'canciones',
    component: CancionComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TakiRoutingModule { }
