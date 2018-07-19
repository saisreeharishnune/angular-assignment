import { Component, OnInit } from '@angular/core';
import { XyzService } from '../xyz.service';

@Component({
  selector: 'app-student-dash-board',
  templateUrl: './student-dash-board.component.html',
  styleUrls: ['./student-dash-board.component.css'],
  
})
export class StudentDashBoardComponent implements OnInit {

  constructor(private service:XyzService) { }
  studentsList:any=[];
  ngOnInit() {
  this.studentsList=this.service.data;
  this.calculateTotalMarks();
  
  }
  calculateTotalMarks(){
    let totalMarks=0;
      for (var _i = 0; _i < this.studentsList.length; _i++) {
        var num=this.studentsList[_i].marks;
        totalMarks=Number(num["Maths"])+Number(num["English"])+Number(num["Science"]);
        this.studentsList[_i].totalMarks=totalMarks;

        if(Number(num["Maths"])>=20 && Number(num["English"]) >=20 && Number(num["Science"])>=20){
          this.studentsList[_i].status="Pass";
        }else{
          this.studentsList[_i].status="failed";
        }
        
    }
  }
  
}
