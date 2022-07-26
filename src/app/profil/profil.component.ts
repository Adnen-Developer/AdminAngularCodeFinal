import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  admin: Admin;
  _id: string;

  //title: string;
  //list: Admin[];

  constructor(private route: ActivatedRoute, private adminService:AdminService) { }
  ngOnInit() : void{

    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params["_id"];
      console.log(this._id); // price
   //   alert( this._id )
    }
  );

    this.adminService.getAdminById(this._id).subscribe(
    (data:Admin)=> this.admin=data
  );
  
}

}

