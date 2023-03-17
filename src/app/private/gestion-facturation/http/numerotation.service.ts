import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Numerotation } from '../models/numerotation';


@Injectable({
  providedIn: 'root'
})
export class NumerotationService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getNumerotationById(id :number):Observable<Numerotation>{
    return this.http.get<Numerotation>(`${this.constant.numerotationUrl}/${id}`);
  }

  getNumerotationList(): Observable<Numerotation[]>{
    return this.http.get<Numerotation[]>(`${this.constant.numerotationUrl}`);
  }

  addNumerotation(numerotation: Numerotation): Observable<any> {
    return this.http.post(`${this.constant.numerotationUrl}`, numerotation);
  }
  
  updateNumerotationById( id :number, numerotation: Numerotation) :Observable<Numerotation>{
    return this.http.put<Numerotation>(`${this.constant.numerotationUrl}/${id}`,numerotation);
  }

  deleteNumerotationById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.numerotationUrl}/${id}`,{ responseType: 'text'});
  }
}
