import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Ajoutez d'autres composants ici
  ],
  imports: [
    BrowserModule,
    // Ajoutez d'autres modules ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
