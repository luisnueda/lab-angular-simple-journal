import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entryList$: Observable<any>;

  constructor(private myServiceService: MyServiceService, public router: Router) {
    this.entryList$ = myServiceService.getEntry();
   }

  ngOnInit() {
  }

  reloadComponent() {
    this.entryList$ = this.myServiceService.getEntry();
  }
}
