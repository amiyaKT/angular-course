import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface PhotoResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<PhotoResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID <your-access-key-here>',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
