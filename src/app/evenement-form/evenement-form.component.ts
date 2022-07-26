


import { Component, OnInit } from '@angular/core';
import {Evenement} from "../model/evenement";
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-evenement-form',
  templateUrl: './evenement-form.component.html',
  styleUrls: ['./evenement-form.component.css']
})
export class EvenementFormComponent implements OnInit {
  evenement: Evenement;

  constructor(private evenementService:EvenementService) { }

  ngOnInit(): void {
    this.evenement= new Evenement();
  }
  save(){
    //
 //   this.book.nbrLike=0;
    this.evenementService.addEvenement(this.evenement).subscribe();
    //notify

  }

}


