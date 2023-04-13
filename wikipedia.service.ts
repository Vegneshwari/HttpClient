import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  onSearch(term: string){

    return this.http.get('https://en.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        utf8: 1,
        srcsearch: term,
        origin: '*',
        list: 'search'
      }
    });

  }
}
