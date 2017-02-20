import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroService} from './hero.service';
import {HeroSearchService} from './hero-search.service';

@NgModule({
  imports:      [ //This array contains the list of external modules used by our application
      BrowserModule, 
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule      
  ],
  declarations: [ //identifies the application's component. the top of this app's rather bare component tree.
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent,
      HeroSearchComponent
    ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap:    [ AppComponent ] /*identifies this AppComponent as the bootstrap component. When Angular launches the app, 
                                      it places the HTML rendering of AppComponent in the DOM, inside the <my-app>
                                       element tags of the index.html */
})

export class AppModule { }
