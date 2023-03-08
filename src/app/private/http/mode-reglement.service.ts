import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { ModeReglement } from '../models/mode-reglement';

@Injectable({
  providedIn: 'root'
})
export class ModeReglementService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getModeReglementById(id :number):Observable<ModeReglement>{
    return this.http.get<ModeReglement>(`${this.constant.modeReglementUrl}/${id}`);
  }

  getModeReglementList(): Observable<ModeReglement[]>{
    return this.http.get<ModeReglement[]>(`${this.constant.modeReglementUrl}`);
  }

  addModeReglement(modeReglement: ModeReglement): Observable<any> {
    return this.http.post(`${this.constant.modeReglementUrl}`, modeReglement);
  }
  
  updateModeReglementById( id :number, modeReglement: ModeReglement) :Observable<ModeReglement>{
    return this.http.put<ModeReglement>(`${this.constant.modeReglementUrl}/${id}`,modeReglement);
  }

  deleteModeReglementById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.modeReglementUrl}/${id}`,{ responseType: 'text'});
  }
}
