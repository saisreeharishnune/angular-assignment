import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showDashboard=false;
  showForm=false;
  viewDashboard(){
    this.showDashboard=true;
    this.showForm=false;
  }
  viewAdmissionForm(){
    this.showForm=true;
    this.showDashboard=false;
  }
}
