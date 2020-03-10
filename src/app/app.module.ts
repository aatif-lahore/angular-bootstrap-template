import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeLayoutOneComponent } from './home-layout-one/home-layout-one.component';
import { HomeLayoutTwoComponent } from './home-layout-two/home-layout-two.component';
import { HomeLayoutThreeComponent } from './home-layout-three/home-layout-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutOneComponent,
    HomeLayoutTwoComponent,
    HomeLayoutThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'layout-one',
        component: HomeLayoutOneComponent
      },
      {
        path: 'layout-two',
        component: HomeLayoutTwoComponent
      },
      {
        path: 'layout-three',
        component: HomeLayoutThreeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
