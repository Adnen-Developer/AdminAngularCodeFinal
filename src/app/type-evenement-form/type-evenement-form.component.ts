

import { Component, OnInit } from '@angular/core';
import {TypeEvenement} from "../model/typeEvenement";
import {TypeEvenementService} from "../services/type-evenement.service";

@Component({
  selector: 'app-type-evenement-form',
  templateUrl: './type-evenement-form.component.html',
  styleUrls: ['./type-evenement-form.component.css']
})
export class TypeEvenementFormComponent implements OnInit {
  typeEvenement: TypeEvenement;

  constructor(private typeEvenementService:TypeEvenementService) { }

  ngOnInit(): void {
    this.typeEvenement= new TypeEvenement();
  }
  save(){
    //
 //   this.book.nbrLike=0;
    this.typeEvenementService.addTypeEvenement(this.typeEvenement).subscribe();
    //notify

  }

}



