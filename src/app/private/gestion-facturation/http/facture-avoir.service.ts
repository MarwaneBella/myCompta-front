import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { FactureAvoir } from '../models/facture-avoir';

@Injectable({
  providedIn: 'root'
})
export class FactureAvoirService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getFactureAvoirById(id :number):Observable<FactureAvoir>{
    return this.http.get<FactureAvoir>(`${this.constant.factureAvoirUrl}/${id}`);
  }

  getAllFactureAvoirs(): Observable<FactureAvoir[]>{
    return this.http.get<FactureAvoir[]>(`${this.constant.factureAvoirUrl}`)
  }

  getFactureAvoirList(params: any): Observable<any> {
    return this.http.get<any>(`${this.constant.factureAvoirUrl}/pagination`, { params });
  }

  addFactureAvoir(factureAvoir: FactureAvoir): Observable<any> {
    return this.http.post(`${this.constant.factureAvoirUrl}`, factureAvoir);
  }

  updateFactureAvoirById( id :number, factureAvoir: FactureAvoir) :Observable<FactureAvoir>{
    return this.http.put<FactureAvoir>(`${this.constant.factureAvoirUrl}/${id}`,factureAvoir);
  }

  deleteFactureAvoirById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.factureAvoirUrl}/${id}`,{ responseType: 'text'});
  }

}

