import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getArticleById(id :number):Observable<Article>{
    return this.http.get<Article>(`${this.constant.articleUrl}/${id}`);
  }

  getArticleList(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.constant.articleUrl}`);
  }

  addArticle(article: Article): Observable<any> {
    return this.http.post(`${this.constant.articleUrl}`, article);
  }
  
  updateArticleById( id :number, article: Article) :Observable<Article>{
    return this.http.put<Article>(`${this.constant.articleUrl}/${id}`,article);
  }

  deleteArticleById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.articleUrl}/${id}`,{ responseType: 'text'});
  }
}
