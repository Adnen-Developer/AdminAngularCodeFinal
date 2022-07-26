
      import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  user : any = {};
  loginForm? : FormGroup;
  connectedUser:any
  constructor(private formBuilder : FormBuilder,  private router : Router) { }

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email :  [''],
      password :  [''],
    })
  }


}