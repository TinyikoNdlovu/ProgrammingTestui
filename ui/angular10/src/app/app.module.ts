import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { ShowParComponent } from './participant/show-par/show-par.component';
import { AddEditParComponent } from './participant/add-edit-par/add-edit-par.component';
import { DishComponent } from './dish/dish.component';
import { ShowDisComponent } from './dish/show-dis/show-dis.component';
import { AddEditDisComponent } from './dish/add-edit-dis/add-edit-dis.component';
import { ScaleComponent } from './scale/scale.component';
import { ShowScaComponent } from './scale/show-sca/show-sca.component';
import { AddEditScaComponent } from './scale/add-edit-sca/add-edit-sca.component';
//add a service to be able to use it in other components
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    ShowParComponent,
    AddEditParComponent,
    DishComponent,
    ShowDisComponent,
    AddEditDisComponent,
    ScaleComponent,
    ShowScaComponent,
    AddEditScaComponent
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
