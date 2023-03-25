import { Departement } from './../models/departement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DepartementService {

  private api = environment.url+ '/departements'
  constructor(private http : HttpClient) { }

  getDepartementById(id :number):Observable<Departement>{
    return this.http.get<Departement>(`${this.api}/${id}`);
  }

  getAllDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(`${this.api}`)
  }
  getDepartementList(params?: any): Observable<any> {
    return this.http.get<any>(`${this.api}/pagination`, { params });
  }

  addDepartement(departement: Departement): Observable<any> {
    return this.http.post(`${this.api}`, departement);
  }

  updateDepartementById( id :number, departement: Departement) :Observable<Departement>{
    return this.http.put<Departement>(`${this.api}/${id}`,departement);
  }

  deleteDepartementById(id :number):Observable<string>{
   return this.http.delete(`${this.api}/${id}`,{ responseType: 'text'});
  }


  // getDepartementByName(): Observable<Departement[]>{
  //   return this.http.get<Departement[]>(`${this.api}/recipient`)
  // }

}
