import { Injectable } from '@angular/core';
import { Entry } from '../entry.interface';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

@Injectable()
export class MyServiceService {

  entry: Array<Entry> = [];

constructor(private http: Http) { }

getEntry() {
  return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
}

}
