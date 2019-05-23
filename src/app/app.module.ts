import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFloatButtonModule } from 'ngx-float-button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilesComponent } from './files/files.component';
import { FilterTextPipe } from './files/filter-text.pipe';
const myRoots: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

const modulesImport = [
    NgbModule,
    NgxFloatButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
];
const modulesExport = [

];
const declarations = [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
];

@NgModule({
  declarations: [...declarations, ProfileComponent, FilesComponent, FilterTextPipe],
  imports: [
      ...modulesImport,
    RouterModule.forRoot(
          myRoots,
          { enableTracing: true } // <-- debugging purposes only
      ),
  ],exports:[...modulesExport],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
