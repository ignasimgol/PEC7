import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  // Método para obtener todos los artículos
  getArticles(query?: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/api/articles`, { params: { q: query } });
  }

  // Método para obtener un artículo por su ID
  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/api/articles/${id}`);
  }

  // Método para cambiar la cantidad de un artículo
  changeQuantity(articleID: number, changeInQuantity: number): Observable<any> {
    return this.http.patch('http://localhost:3000/api/articles/' + articleID, { changeInQuantity });
  }

  // Método para crear un artículo
  create(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/api/articles', article);
  }
}

