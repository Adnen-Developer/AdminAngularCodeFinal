import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { programme } from './model/programme';
import { map } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";
import { VariableAst } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProgrammeServiceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000/programme/"
   urlAdd= `${this.baseUrl}/add`;

  create(programme: programme): Observable<programme> {
    return this.http.post<any>(this.urlAdd, programme).pipe(
      map((obj) => obj)
      
    );
  }
   getprogrammes()
  {
    return this.http.get<programme>(this.baseUrl);
    
  } 
  //update a book
  updateProgramme(programme: programme){
    return this.http.patch(this.baseUrl + "update/" + programme._id, programme)
 }
 getProgrammeById(_id: string) {

  return this.http.get<any>(this.baseUrl  + _id);
}
deleteProgramme(_id: string){
  return this.http.delete(this.baseUrl+ "delete/" +_id)
}


}
