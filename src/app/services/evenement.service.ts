
import { Injectable } from '@angular/core';
import {Evenement} from "../model/evenement";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TypeEvenementService} from "../services/type-evenement.service";
import { TypeEvenement } from '../model/typeEvenement';
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
   url: string = environment.url  + "/evenement";
   tableResultOfEvenementSearch: Evenement[];
   typeEvenementData: TypeEvenement;
   constructor(private http: HttpClient, private typeEvenementService :TypeEvenementService) { }
   //get Books
   getList(){
     return this.http.get<Evenement[]>(this.url + "/")
   }
   //add a new Book
  addEvenement(evenement:Evenement){
     return this.http.post(this.url + "/add",evenement )
  }
  //delete a book
/*
  deleteEvenement(_id: string, currentAdmin: any){
     return this.http.delete(this.url + "/delete/" +_id + "?" + currentAdmin)
  }

*/


  deleteEvenement(_id: string){
     return this.http.delete(this.url+ "/delete/" +_id)
  }

  //update a book
  updateEvenement(evenement: Evenement){
     return this.http.put(this.url + "/update/" + evenement._id, evenement)
  }


   getEvenementById(_id: string) {

         return this.http.get<Evenement>(this.url + "/getEvenementById/" + _id);
   }


getEvenementByInstanceOrganisatrice(instanceOrganisatirice: string) {


      return this.http.get<Evenement[]>(this.url + "/getEvenementByInstanceOrganisatirice/" + instanceOrganisatirice);
}

getEvenementByIdAdminCreateur(idAdminCreateur: string) {


   return this.http.get<Evenement[]>(this.url + "/getEvenementByIdAdminCreateur/" + idAdminCreateur);
}

getEvenementByLieu(lieu: string) {


   return this.http.get<Evenement[]>(this.url + "/getEvenementByLieu/" + lieu);
}


getEvenementByMaxParams(lieuEvenementFiltreInactif :string, 
   idAdminCreateurFiltreInactif :string, instanceOrganistatriceFiltreInactif :string) {
      /*
localhost:3000/evenement/getEvenementByParams/
?instanceOrganisatirice=MBRE&adminId=62d68589080f9ed423d5dae9&lieu=MEMBRE
      */

      return this.http.get<Evenement[]>(this.url + "/getEvenementByParams/" + "?instanceOrganisatirice="+instanceOrganistatriceFiltreInactif+ "&adminId=" +idAdminCreateurFiltreInactif +"&lieu=" +lieuEvenementFiltreInactif);      
   }

}


