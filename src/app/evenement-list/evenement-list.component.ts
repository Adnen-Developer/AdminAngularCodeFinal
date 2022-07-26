




import { Component, OnInit } from '@angular/core';
import {Evenement} from "../model/evenement";
import {EvenementService} from "../services/evenement.service";
// import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {
  title: string;
  list: Evenement[];
  currentAdmin : any;
  nameTitle : string = "EvenementList";
  evenementIdFromTemplate : string;
  evenementSearchedById: Evenement;
  serachButtonClicked: boolean;
  selectedSearchCriteria : string;
  boolEvalValue: boolean;
  evenementIdFiltreInactif :string; 
  lieuEvenementFiltreInactif :string; 
  idAdminCreateurFiltreInactif :string;
  instanceOrganistatriceFiltreInactif :string;
  boolEvalKeyUp: boolean;
  constructor(private evenementService: EvenementService ) {
  }
  ngOnInit(): void {
    this.title = "test";
    this.evenementIdFromTemplate = "";
    this.serachButtonClicked = false;
    this.selectedSearchCriteria = "idEvenement";
    this.boolEvalValue = false;
    this.boolEvalKeyUp = false;
    this.evenementIdFiltreInactif = ""; 
    this.lieuEvenementFiltreInactif = ""; 
    this.idAdminCreateurFiltreInactif = "";
    this.instanceOrganistatriceFiltreInactif = "";
    this.nameTitle = "EvenementList";

    this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );



    
  }


  delete(_id: string): void {

     this.evenementService.deleteEvenement(_id).subscribe();

     this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );

  }

  searchEvenementByIdClick(evenementIdFromTemplate: string) {
    this.serachButtonClicked = true;
    if(this.list.length == 1) {

      this.evenementService.getList().subscribe(
        (data:Evenement[])=> this.list=data
      );
    }

    if(evenementIdFromTemplate.length > 5) {
      this.list = [];
    this.evenementService.getEvenementById(evenementIdFromTemplate).subscribe(

      (data:Evenement)=>  this.evenementSearchedById = data

    );

     
      if(this.evenementSearchedById._id != "") {
        this.list = [];
     this.list.push(this.evenementSearchedById);
    }

  }



}


searchEvenementByIdKeyUp(evenementIdFromTemplate: string) {

  if(this.serachButtonClicked == true) {

    this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );

    this.serachButtonClicked = false;
  }

  if(evenementIdFromTemplate.length < 3) {

    this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );

  }  

  
  if(evenementIdFromTemplate.length >= 3) {
    this.list = [];
      
    
    
      if(this.selectedSearchCriteria == "idEvenement") {

        this.evenementService.getEvenementById(evenementIdFromTemplate).subscribe(

          (data:Evenement)=>  this.evenementSearchedById = data
  
        );
  
        if(this.evenementSearchedById._id != "") {
          this.list = [];
      this.list.push(this.evenementSearchedById);
      }

      }

      if(this.selectedSearchCriteria == "lieuEvenement") {

        this.evenementService.getEvenementByLieu(evenementIdFromTemplate).subscribe(

          (data:Evenement[])=>  this.list = data
  
        );

      }

      if(this.selectedSearchCriteria == "idAdminCreateur") {

        this.evenementService.getEvenementByIdAdminCreateur(evenementIdFromTemplate).subscribe(

          (data:Evenement[])=>  this.list = data
  
        );

      }

      if(this.selectedSearchCriteria == "instanceOrganistatrice") {

        this.evenementService.getEvenementByInstanceOrganisatrice(evenementIdFromTemplate).subscribe(

          (data:Evenement[])=>  this.list = data
  
        );
      }
      
    


}

}


onChange(deviceValue :any) {
  console.log(deviceValue.value);
  this.selectedSearchCriteria = deviceValue.value;
}

searchEvenementByParams(lieuEvenementFiltreInactif :string, 
  idAdminCreateurFiltreInactif :string, instanceOrganistatriceFiltreInactif :string) {

    this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );

    this.boolEvalValue = (lieuEvenementFiltreInactif.length > 2) && (idAdminCreateurFiltreInactif.length > 2) && (instanceOrganistatriceFiltreInactif.length > 2);
    if(this.boolEvalValue) {
      this.list = [];

    this.evenementService.getEvenementByMaxParams(lieuEvenementFiltreInactif, idAdminCreateurFiltreInactif, 
      instanceOrganistatriceFiltreInactif).subscribe(

        (data:Evenement[])=>  this.list = data

      );



  }
}


}


