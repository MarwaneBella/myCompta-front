import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { MotCle } from '../models/mot-cle';


@Injectable({
  providedIn: 'root'
})
export class MotCleService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getMotCleById(id :number):Observable<MotCle>{
    return this.http.get<MotCle>(`${this.constant.motCleUrl}/${id}`);
  }

  getMotCleList(): Observable<MotCle[]>{
    return this.http.get<MotCle[]>(`${this.constant.motCleUrl}`);
  }

  addMotCle(motCle: MotCle): Observable<any> {
    return this.http.post(`${this.constant.motCleUrl}`, motCle);
  }
  
  updateMotCleById( id :number, motCle: MotCle) :Observable<MotCle>{
    return this.http.put<MotCle>(`${this.constant.motCleUrl}/${id}`,motCle);
  }

  deleteMotCleById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.motCleUrl}/${id}`,{ responseType: 'text'});
  }
  
}
