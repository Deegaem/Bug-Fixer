import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { IssuesModule } from './issues/issues.module';
import { IssuesService } from './shared/issues.service';
import { UsersService } from './shared/users.service';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './shared/auth.guard.service';

export function tokenGetterFn() {
  return localStorage.getItem('token');
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IssuesModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetterFn
      }
    })
  ],
  providers: [IssuesService, UsersService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
