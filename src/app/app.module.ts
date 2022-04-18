import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GoogleMapsModule } from '@angular/google-maps';

import { AboutComponent } from './about/about.component';
import { ColorPickerComponent } from './shop/color-picker/color-picker.component';
import { ColorPickerDialogComponent } from './shop/color-picker/color-picker-dialog/color-picker-dialog.component';
import { DumplingComponent } from './shop/dumpling/dumpling.component';
import { LocationComponent } from './location/location.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopComponent } from './shop/shop.component';

// TODO: #9. Add the power of @angular/cdk/a11y
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShopComponent,
    AboutComponent,
    LocationComponent,
    DumplingComponent,
    ColorPickerComponent,
    ColorPickerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatToolbarModule,
    GoogleMapsModule,
    A11yModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
