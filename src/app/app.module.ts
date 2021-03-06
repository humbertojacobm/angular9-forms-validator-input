import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { HeroCrossFieldComponent } from './hero-cross-field/hero-cross-field.component';
import { IdentityRevealedDirective } from './identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    HeroCrossFieldComponent,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
