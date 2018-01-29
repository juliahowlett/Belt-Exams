import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { sortByPipe } from './sortByPipe';
import { ItemService } from './items.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    NewComponent,
    sortByPipe,
  ],
  imports: [
    CookieModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
    FormsModule,
  ],
  providers: [
    AuthService, 
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

