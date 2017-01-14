import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component'
import {HeroService} from './hero.service';

@NgModule({
  imports:      [ //This array contains the list of external modules used by our application
      BrowserModule, 
      FormsModule,
      RouterModule.forRoot([
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },  
      {
        path:'heroes', component: HeroesComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'hero/:id', component: HeroDetailComponent
      }
    ]) 
  ],
  declarations: [ //identifies the application's component. the top of this app's rather bare component tree.
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
    ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ] /*identifies this AppComponent as the bootstrap component. When Angular launches the app, 
                                      it places the HTML rendering of AppComponent in the DOM, inside the <my-app>
                                       element tags of the index.html */
})

export class AppModule { }
