import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
 
    DemoAppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularDualListBoxModule , FormsModule,
    
  ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class AppModule { }
