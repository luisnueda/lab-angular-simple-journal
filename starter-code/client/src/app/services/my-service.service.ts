import { Injectable } from '@angular/core';
import { Entry } from '../entry.interface';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class MyServiceService {
  BASE_URL = 'http://localhost:3000';
  entry: Array<Entry>;

  constructor(private http: Http) {}

  getEntry() {
    return this.http
      .get(`${this.BASE_URL}/api/journal-entries`)
      .map(res => res.json());
  }
  getEntryId(id) {
    return this.http
      .get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map(res => res.json());
  }
  addEntry(title, content) {
    console.log(title,content)
    return this.http
      .post(`${this.BASE_URL}/api/journal-entries`, {title, content})
      .map(res => res.json());
  }
}
