import { yearsExper, dataModel } from './../model/config';
import { ApiService } from './../data/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  registerForm!: FormGroup;
  dataModelObj: dataModel = new dataModel();
  experience = yearsExper;
  platforms = new FormControl('');
  platformLang: string[] = ['ASP.NET', 'Angular', 'Java', 'Springboot', 'PL/SQL', 'TypeScript', 'AJAX'];


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private api: ApiService) { }


  ngOnInit() {
    this.registerForm = this.fb.group({
      uid: new FormControl(new Date().getTime().toString()),

      name: [
        '',
        [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(50),
        ],
      ],
        designation: [
          '',
        [
          Validators.required,
          Validators.minLength(3), 
          Validators.maxLength(20),
        ],
      ],
      yearsExper:['',[Validators.required]],
      skills:['',[Validators.required]],
      mobileNumber: [
        '',
      [
        Validators.required,
        Validators.minLength(10), 
        Validators.maxLength(10),
      ],
    ],
    email:['',[Validators.required,Validators.minLength(10),]],
    gender:['',[Validators.required]],
  });
  }
  postDataDetails(){
    this.dataModelObj.id=this.registerForm.value.uid; 
    this.dataModelObj.name=this.registerForm.value.name;
    this.dataModelObj.designation=this.registerForm.value.designation; 
    this.dataModelObj.yearsExper=this.registerForm.value.yearsExper;
    this.dataModelObj.skills=this.registerForm.value.skills;
    this.dataModelObj.gender=this.registerForm.value.gender;
    this.dataModelObj.mobileNumber=this.registerForm.value.mobiletlumber;
    this.dataModelObj.email=this.registerForm.value.email;

    this.api.postData(this.dataModelObj)
    .subscribe(res=>{
    console.log(res);
    alert("data submitted") 
    this.registerForm.reset();
    })}
}
