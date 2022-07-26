

import { Component, OnInit } from '@angular/core';
import {TypeEvenement} from "../model/typeEvenement";
import {TypeEvenementService} from "../services/type-evenement.service";
// import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-type-evenement-list',
  templateUrl: './type-evenement-list.component.html',
  styleUrls: ['./type-evenement-list.component.css']
})
export class TypeEvenementListComponent implements OnInit {
  title: string;
  list: TypeEvenement[];
  nameTitle: string = "TypeEvenement ";
  constructor(private typeEvenementService: TypeEvenementService ) {
  }
  ngOnInit(): void {
    this.title = "test";

    this.typeEvenementService.getList().subscribe(
      (data:TypeEvenement[])=> this.list=data
    );
  }



  delete(_id: string): void {

     this.typeEvenementService.deleteTypeEvenement(_id).subscribe();

     this.typeEvenementService.getList().subscribe(
      (data:TypeEvenement[])=> this.list=data
    );

  }

}



