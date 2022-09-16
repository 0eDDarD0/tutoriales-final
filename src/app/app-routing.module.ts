import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { TutorialDetalleComponent } from './tutorial-detalle/tutorial-detalle.component';

const routes: Routes = [
    {path:"", component:ListaTutorialesComponent,},
    {path:"tutorial/:id", component:TutorialDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
