import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  single: Object;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private myServiceService: MyServiceService
  ) {

    route.params.subscribe(params => {
      myServiceService.getEntryId(params.id).subscribe( single => {
        this.single = single;
      });
   });
  }

  ngOnInit() {
  }

  }
