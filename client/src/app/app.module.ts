import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HttpClientModule } from '@angular/common/http';
import { MarkerDetailsComponent } from './marker-details/marker-details.component';
import { AddLogComponent } from './add-log/add-log.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MarkerDetailsComponent, AddLogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiYWhtZWRpeiIsImEiOiJja2N3bDQ1dzQwMGlnMzVwZW11YmJudnB2In0.sPjpcFUzdk87zMtKJDsWIw',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
