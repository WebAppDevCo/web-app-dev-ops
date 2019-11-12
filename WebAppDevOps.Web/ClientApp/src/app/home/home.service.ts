import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {
  }

  getCurrentTime() {
    //return this.http.get('http://localhost:58709/api/values'); //iis express
    //return this.http.get('http://localhost:56708/api/values'); //docker
    return this.http.get('http://13.68.129.130/api/values'); //pod public IP
  }
}
