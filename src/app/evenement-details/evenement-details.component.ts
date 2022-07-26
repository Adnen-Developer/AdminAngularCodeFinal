
    

import { Component, OnInit } from '@angular/core';
import {Evenement} from "../model/evenement";
import {EvenementService} from "../services/evenement.service";

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {
  
 
  evenement: Evenement;
  _id: string;
 // adminCreateurId: string;
  constructor(private route: ActivatedRoute, private evenementService:EvenementService) { }


    

    ngOnInit() : void{

   
      
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this._id = params["_id"];
       // this.adminCreateurId = "";
        console.log("this._id = " + this._id); // price
       // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
      }

      
    );


      this.evenementService.getEvenementById(this._id).subscribe(
      (data:Evenement)=> this.evenement=data
    );
    
  }

  updateEvent(){
    //
 //   this.book.nbrLike=0;
    this.evenementService.updateEvenement(this.evenement).subscribe();
    //notify

  }

}




