import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../model/admin';
import { Membre } from '../model/membre';
import { AdminService } from '../services/admin.service';
import { MembreService } from '../services/membre.service';

@Component({
  selector: 'app-profilmembre',
  templateUrl: './profilmembre.component.html',
  styleUrls: ['./profilmembre.component.css']
})
export class ProfilmembreComponent implements OnInit {
  membre: Membre;
  _id: string;


  constructor(private route: ActivatedRoute, private membreService:MembreService) { }
  ngOnInit() : void{

    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params["_id"];
      console.log(this._id); // price
   //   alert( this._id )
    }
  );

    this.membreService.getMembreById(this._id).subscribe(
    (data:Membre)=> this.membre=data
  );
  
}

}


