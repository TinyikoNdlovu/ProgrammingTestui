import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//add a service to be able to use it in other components
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { ShowPerComponent } from './person/show-per/show-per.component';
import { AddEditPerComponent } from './person/add-edit-per/add-edit-per.component';
import { FoodComponent } from './food/food.component';
import { ShowFodComponent } from './food/show-fod/show-fod.component';
import { AddEditFodComponent } from './food/add-edit-fod/add-edit-fod.component';
import { ActivityComponent } from './activity/activity.component';
import { ShowActComponent } from './activity/show-act/show-act.component';
import { AddEditActComponent } from './activity/add-edit-act/add-edit-act.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ShowPerComponent,
    AddEditPerComponent,
    FoodComponent,
    ShowFodComponent,
    AddEditFodComponent,
    ActivityComponent,
    ShowActComponent,
    AddEditActComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
