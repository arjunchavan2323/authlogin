import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { StudentdashbordComponent } from './component/studentdashbord/studentdashbord.component';
import { TeacherdashbordComponent } from './component/teacherdashbord/teacherdashbord.component';
import { AboutComponent } from './component/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import{AngularFireModule}from'@angular/fire/compat'
import{AngularFireAuthModule}from'@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    StudentdashbordComponent,
    TeacherdashbordComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
