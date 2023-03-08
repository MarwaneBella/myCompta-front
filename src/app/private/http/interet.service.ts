import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Interet } from '../models/interet';

@Injectable({
  providedIn: 'root'
})
export class InteretService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getInteretById(id :number):Observable<Interet>{
    return this.http.get<Interet>(`${this.constant.interetUrl}/${id}`);
  }

  getInteretList(): Observable<Interet[]>{
    return this.http.get<Interet[]>(`${this.constant.interetUrl}`);
  }

  addInteret(interet: Interet): Observable<any> {
    return this.http.post(`${this.constant.interetUrl}`, interet);
  }
  
  updateInteretById( id :number, interet: Interet) :Observable<Interet>{
    return this.http.put<Interet>(`${this.constant.interetUrl}/${id}`,interet);
  }

  deleteInteretById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.interetUrl}/${id}`,{ responseType: 'text'});
  }
}
