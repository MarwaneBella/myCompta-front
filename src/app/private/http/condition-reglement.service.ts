import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { ConditionReglement } from '../models/condition-reglement';

@Injectable({
  providedIn: 'root'
})
export class ConditionReglementService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getConditionReglementById(id :number):Observable<ConditionReglement>{
    return this.http.get<ConditionReglement>(`${this.constant.conditionReglementUrl}/${id}`);
  }

  getConditionReglementList(): Observable<ConditionReglement[]>{
    return this.http.get<ConditionReglement[]>(`${this.constant.conditionReglementUrl}`);
  }

  addConditionReglement(conditionReglement: ConditionReglement): Observable<any> {
    return this.http.post(`${this.constant.conditionReglementUrl}`, conditionReglement);
  }
  
  updateConditionReglementById( id :number, conditionReglement: ConditionReglement) :Observable<ConditionReglement>{
    return this.http.put<ConditionReglement>(`${this.constant.conditionReglementUrl}/${id}`,conditionReglement);
  }

  deleteConditionReglementById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.conditionReglementUrl}/${id}`,{ responseType: 'text'});
  }
}
