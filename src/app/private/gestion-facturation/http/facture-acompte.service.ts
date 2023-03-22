import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { FactureAcompte } from '../models/facture-acompte';

@Injectable({
  providedIn: 'root'
})
export class FactureAcompteService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getFactureAcompteById(id :number):Observable<FactureAcompte>{
    return this.http.get<FactureAcompte>(`${this.constant.factureAcompteUrl}/${id}`);
  }

  getAllFactureAcomptes(): Observable<FactureAcompte[]>{
    return this.http.get<FactureAcompte[]>(`${this.constant.factureAcompteUrl}`)
  }

  getFactureAcompteList(params: any): Observable<any> {
    return this.http.get<any>(`${this.constant.factureAcompteUrl}/pagination`, { params });
  }

  addFactureAcompte(factureAcompte: FactureAcompte): Observable<any> {
    return this.http.post(`${this.constant.factureAcompteUrl}`, factureAcompte);
  }

  updateFactureAcompteById( id :number, factureAcompte: FactureAcompte) :Observable<FactureAcompte>{
    return this.http.put<FactureAcompte>(`${this.constant.factureAcompteUrl}/${id}`,factureAcompte);
  }

  deleteFactureAcompteById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.factureAcompteUrl}/${id}`,{ responseType: 'text'});
  }

}

