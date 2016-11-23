import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ListComponent},
      {path: 'about', component: AboutComponent},
      {path: 'about/:id', component: AboutComponent},
      {path: 'lazy', loadChildren:'./lazy/lazy.module#LazyModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
