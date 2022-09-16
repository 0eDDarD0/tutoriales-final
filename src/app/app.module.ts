import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { TutorialDetalleComponent } from './tutorial-detalle/tutorial-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaTutorialesComponent,
    TutorialDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
