
import { Injectable } from '@angular/core';
import {Admin} from "../model/admin";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   url: string = environment.url  + "/admin";
   constructor(private http: HttpClient) { }
   //get Admins
   getList(){
     return this.http.get<Admin[]>(this.url + "/")
   }
   //add a new Admin
  addAdmin(admin:Admin){
     return this.http.post(this.url + "/add",admin )
  }
  //delete an Admin
  deleteAdmin(_id: string){
     return this.http.delete(this.url + "/delete/" +_id)
  }
  //update an Admin
  updateAdmin(admin: Admin){
     return this.http.put(this.url + "/update/" + admin._id, admin)
  }

  getAdminById(_id: string) {

   return this.http.get<Admin>(this.url + "/getAdminById/" + _id);
}


login(user:any){
   return this.http.post<{message:any, connectedUser : any}>(this.url + '/login',user);
 }


}
