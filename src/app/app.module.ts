import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './navigation/content/content.component';
import { CustomValidatorComponent } from './components/1-custom-validator/custom-validator.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PasswordValidatorDirective } from './directives/custom-validator/password-validator.directive';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    PasswordValidatorDirective,
    CustomValidatorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
