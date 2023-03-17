import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Phone } from '../models/phone';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getPhoneById(id :number):Observable<Phone>{
    return this.http.get<Phone>(`${this.constant.phoneUrl}/${id}`);
  }

  getPhoneList(): Observable<Phone[]>{
    return this.http.get<Phone[]>(`${this.constant.phoneUrl}`);
  }

  addPhone(phone: Phone): Observable<any> {
    return this.http.post(`${this.constant.phoneUrl}`, phone);
  }
  
  updatePhoneById( id :number, phone: Phone) :Observable<Phone>{
    return this.http.put<Phone>(`${this.constant.phoneUrl}/${id}`,phone);
  }

  deletePhoneById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.phoneUrl}/${id}`,{ responseType: 'text'});
  }
}
