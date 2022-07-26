/*
  selector: 'app-admin-list',

*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Admin} from "../model/admin";
import {AdminService} from "../services/admin.service";
// import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  title: string;
  list: Admin[];
  sessionRole : any;
  adminIsConnected: boolean;
  constructor(private adminService: AdminService, private router : Router ) {
  }
  ngOnInit(): void {
    this.adminIsConnected = false;
    this.sessionRole = localStorage.getItem("connectedUser")


    if(this.sessionRole != null) {

    this.adminIsConnected = JSON.parse(this.sessionRole).role == "Admin";
    if(this.adminIsConnected ) {


    
    this.title = "test";

    this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );
  } 


}else {

  this.router.navigate(["/login"]);

}


//////////////////////////
}
  delete(_id: string): void {

     this.adminService.deleteAdmin(_id).subscribe();

     this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );

  }

}
