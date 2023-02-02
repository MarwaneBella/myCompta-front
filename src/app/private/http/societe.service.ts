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

  getSocieteById(id :number):Observable<any>{
    return this.http.get<any>(`${this.constant.societeUrl}/${id}`);
  }

  getSocieteList(): Observable<Societe[]>{
    return this.http.get<Societe[]>(`${this.constant.societeUrl}`);
  }

  addSociete(bonAchat: Societe): Observable<any> {
    return this.http.post(`${this.constant.societeUrl}`, bonAchat);
  }
  
  updateSociete( id :number, bonAchat: Societe) :Observable<Societe>{
    return this.http.put<Societe>(`${this.constant.societeUrl}/${id}`,bonAchat);
  }

  deleteBonAchatById(id :number):Observable<Societe>{
   return this.http.delete<Societe>(`${this.constant.societeUrl}/${id}`);
  }

  

}
