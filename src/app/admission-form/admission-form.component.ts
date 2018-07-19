import { Component } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

function yearValidator(control: FormControl) {
  if ( control.value &&  control.value > 2017) {
    return {isError:true}
  }
  return null; 
}
@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent  {

  
  admissionForm=new FormGroup({
    firstName :new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z ]+')]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z ]+')]),
    class:new FormControl('',Validators.required),
    year_pass:new FormControl('',[Validators.required,yearValidator]),
    prcnt_marks:new FormControl('',Validators.required)

  });
  onSubmit(){
    console.log(this.admissionForm.value);
  }

}
