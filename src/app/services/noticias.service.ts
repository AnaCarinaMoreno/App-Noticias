import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais+'&category='+parametros.categoria +'&apiKey=2baa3ae3bff64ea29042e420fab3ba95'
    return this.http.get(URL);

  }
}
