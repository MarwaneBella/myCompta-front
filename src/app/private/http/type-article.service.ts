import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { TypeArticle } from '../models/type-article';

@Injectable({
  providedIn: 'root'
})
export class TypeArticleService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getTypeArticleById(id :number):Observable<TypeArticle>{
    return this.http.get<TypeArticle>(`${this.constant.typeArticleUrl}/${id}`);
  }

  getTypeArticleList(): Observable<TypeArticle[]>{
    return this.http.get<TypeArticle[]>(`${this.constant.typeArticleUrl}`);
  }

  addTypeArticle(typeArticle: TypeArticle): Observable<any> {
    return this.http.post(`${this.constant.typeArticleUrl}`, typeArticle);
  }
  
  updateTypeArticleById( id :number, typeArticle: TypeArticle) :Observable<TypeArticle>{
    return this.http.put<TypeArticle>(`${this.constant.typeArticleUrl}/${id}`,typeArticle);
  }

  deleteTypeArticleById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.typeArticleUrl}/${id}`,{ responseType: 'text'});
  }
}

