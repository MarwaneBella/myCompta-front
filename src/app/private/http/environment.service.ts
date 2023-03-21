import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Environment } from "../models/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  url=environment.url;
  private api = environment.url+ '/environments'

  constructor(private http : HttpClient) { }

  getEnvironmentById(id :number):Observable<Environment>{
    return this.http.get<Environment>(`${this.api}/${id}`);
  }

  getAllEnvironments(): Observable<Environment[]>{
    return this.http.get<Environment[]>(`${this.api}`)
  }


}
