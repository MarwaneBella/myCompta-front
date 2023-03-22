import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { FactureSimple } from '../models/facture-simple';

@Injectable({
  providedIn: 'root'
})
export class FactureSimpleService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getFactureSimpleById(id :number):Observable<FactureSimple>{
    return this.http.get<FactureSimple>(`${this.constant.factureSimpleUrl}/${id}`);
  }

  getAllFactureSimples(): Observable<FactureSimple[]>{
    return this.http.get<FactureSimple[]>(`${this.constant.factureSimpleUrl}`)
  }

  getFactureSimpleList(params: any): Observable<any> {
    return this.http.get<any>(`${this.constant.factureSimpleUrl}/pagination`, { params });
  }

  addFactureSimple(factureSimple: FactureSimple): Observable<any> {
    return this.http.post(`${this.constant.factureSimpleUrl}`, factureSimple);
  }

  updateFactureSimpleById( id :number, factureSimple: FactureSimple) :Observable<FactureSimple>{
    return this.http.put<FactureSimple>(`${this.constant.factureSimpleUrl}/${id}`,factureSimple);
  }

  deleteFactureSimpleById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.factureSimpleUrl}/${id}`,{ responseType: 'text'});
  }

}

