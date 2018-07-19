import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

import { XyzService } from './xyz.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentDashBoardComponent,
    AdmissionFormComponent,
    //titleCase
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule
  ],
  providers: [XyzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
