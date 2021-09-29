import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecomendacaoInserirComponent } from './componentes/recomendacao-inserir/recomendacao-inserir.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
