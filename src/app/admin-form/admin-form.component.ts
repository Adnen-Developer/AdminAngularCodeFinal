import { Component, OnInit } from '@angular/core';
import {Admin} from "../model/admin";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  admin: Admin;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.admin= new Admin();
  }
  save(){
    //
 //   this.book.nbrLike=0;
    this.adminService.addAdmin(this.admin).subscribe();
    //notify

  }

}
