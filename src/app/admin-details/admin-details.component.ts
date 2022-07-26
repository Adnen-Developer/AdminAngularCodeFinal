


import { Component, OnInit } from '@angular/core';
import { Admin } from "../model/admin";
import {AdminService} from "../services/admin.service";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
 
  admin: Admin;
  _id: string;

  constructor(private route: ActivatedRoute, private adminService:AdminService) { }

    ngOnInit() : void{

      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this._id = params["_id"];
        console.log(this._id); // price
        alert( this._id )
      }
    );

      this.adminService.getAdminById(this._id).subscribe(
      (data:Admin)=> this.admin=data
    );
    
  }

  updateAdmin(){
 
    this.adminService.updateAdmin(this.admin).subscribe();
  }

}


