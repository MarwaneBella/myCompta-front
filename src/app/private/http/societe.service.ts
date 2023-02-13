import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Societe } from '../models/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getSocieteById(id :number):Observable<Societe>{
    return this.http.get<Societe>(`${this.constant.societeUrl}/${id}`);
  }

  getSocieteList(): Observable<Societe[]>{
    return this.http.get<Societe[]>(`${this.constant.societeUrl}`);
  }

  addSociete(societe: Societe): Observable<any> {
    return this.http.post(`${this.constant.societeUrl}`, societe);
  }
  
  updateSocieteById( id :number, societe: Societe) :Observable<Societe>{
    return this.http.put<Societe>(`${this.constant.societeUrl}/${id}`,societe);
  }

  deleteSocieteById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.societeUrl}/${id}`,{ responseType: 'text'});
  }

  

}
