


import { Injectable } from '@angular/core';
import {Membre} from "../model/membre";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MembreService {
   url: string = environment.url  + "/membre";
   constructor(private http: HttpClient) { }
   //get Membres
   getList(){
     return this.http.get<Membre[]>(this.url + "/")
   }
   //add a new Membre
  addMembre(membre:Membre){
     return this.http.post(this.url + "/add",membre )
  }
  //delete Membre
  deleteMembre(_id: string){
     return this.http.delete(this.url + "/delete/" +_id)
  }
  //update Membre
  updateMembre(membre: Membre){
     return this.http.put(this.url + "/update/" + membre._id, membre)
  }

  getMembreById(_id: string) {

   return this.http.get<Membre>(this.url + "/getMembreById/" + _id);
}
}