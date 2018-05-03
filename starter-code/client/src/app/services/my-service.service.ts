import { Injectable } from '@angular/core';
import { Entry } from '../entry.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

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
}
