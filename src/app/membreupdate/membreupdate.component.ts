
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Membre } from '../model/membre';
import { MembreService } from '../services/membre.service';

@Component({
  selector: 'app-membreupdate',
  templateUrl: './membreupdate.component.html',
  styleUrls: ['./membreupdate.component.css']
})


export class MembreupdateComponent implements OnInit {
 
  membre: Membre;
  _id: string;

  constructor(private route: ActivatedRoute, private membreService:MembreService) { }

    ngOnInit() : void{

      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this._id = params["_id"];
        console.log(this._id); // price
        //alert( this._id )
      }
    );

      this.membreService.getMembreById(this._id).subscribe(
      (data:Membre)=> this.membre=data
    );
    
  }

  updateMembre(){
 
    this.membreService.updateMembre(this.membre).subscribe();
  }

}


