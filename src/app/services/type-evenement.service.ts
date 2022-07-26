
import { Injectable } from '@angular/core';
import {TypeEvenement} from "../model/typeEvenement";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TypeEvenementService {
   url: string = environment.url + "/typeEvenement";
   constructor(private http: HttpClient) { }
   //get Books
   getList(){
     return this.http.get<TypeEvenement[]>(this.url)
   }
   //add a new Book
  addTypeEvenement(typeEvenement:TypeEvenement){
     return this.http.post(this.url + "/add",typeEvenement )
  }
  //delete a book
  deleteTypeEvenement(_id: string){
     return this.http.delete(this.url+ "/delete/" +_id)
  }
  //update a book

  updateTypeEvenement(typeEvenement: TypeEvenement){
     return this.http.put(this.url + "/update/"+ typeEvenement._id, typeEvenement)
  }

   getATypeEventById(_id: string) {

         return this.http.get<TypeEvenement>(this.url + "/getTypeEvenementById/" + _id);
      }

}


