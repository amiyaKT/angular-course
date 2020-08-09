import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface WikiResponse {
  query: {
    search: {
      title: string;
      pageid: number;
      snippet: string;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<WikiResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          origin: '*',
          srsearch: term,
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
