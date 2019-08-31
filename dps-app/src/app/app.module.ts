import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/components/components.module';
import { AppRoutingModule } from 'src/routes/app-routing.module';
import { FormsModule } from "@angular/forms";
import { CustomServiceModule } from "../services/services.module";
import { DirectiveModule } from 'src/directives/directive.module';
import { CustomDirective } from 'src/directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    CustomServiceModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
