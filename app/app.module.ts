import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ //This array contains the list of external modules used by our application
      BrowserModule, 
      FormsModule 
    ],
  declarations: [ //identifies the application's component. the top of this app's rather bare component tree.
      AppComponent 
    ],
  bootstrap:    [ AppComponent ] /*identifies this AppComponent as the bootstrap component. When Angular launches the app, 
                                      it places the HTML rendering of AppComponent in the DOM, inside the <my-app>
                                       element tags of the index.html */
})
export class AppModule { }
