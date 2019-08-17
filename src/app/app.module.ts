import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains/villains.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';
import { VillainDetailComponent } from './villains/villain-detail/villain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    VillainListComponent,
    VillainDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
