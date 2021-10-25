import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  options: any;
  url: string;

  constructor(private http: HttpClient) {
      this.url = "https://api.pexels.com/videos/popular?per_page=15&page=1";
      this.options = {
        headers: new HttpHeaders({
          "Authorization": "563492ad6f917000010000016a11db91fb514a659e3196f75dff54c9"
        })
      }
  }

  getVideos(): Observable<any> {
    return this.http.get<any>(this.url, this.options);
  }

}
