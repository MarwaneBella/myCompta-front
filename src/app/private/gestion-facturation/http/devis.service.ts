import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Devis } from '../models/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getDevisById(id :number):Observable<Devis>{
    return this.http.get<Devis>(`${this.constant.devisUrl}/${id}`);
  }

  getAllDeviss(): Observable<Devis[]>{
    return this.http.get<Devis[]>(`${this.constant.devisUrl}`)
  }

  getDevisList(params: any): Observable<any> {
    return this.http.get<any>(`${this.constant.devisUrl}/pagination`, { params });
  }

  addDevis(devis: Devis): Observable<any> {
    return this.http.post(`${this.constant.devisUrl}`, devis);
  }

  updateDevisById( id :number, devis: Devis) :Observable<Devis>{
    return this.http.put<Devis>(`${this.constant.devisUrl}/${id}`,devis);
  }

  deleteDevisById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.devisUrl}/${id}`,{ responseType: 'text'});
  }


}
