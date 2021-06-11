import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoadingScreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
