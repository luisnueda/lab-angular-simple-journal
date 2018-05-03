import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { EntryListComponent } from '../entry-list/entry-list.component';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {
 @Output() refresh = new EventEmitter<string>();
  entryForm: any;

  constructor(private myServiceService: MyServiceService, public router: Router) {}

  ngOnInit() {
  }


  addEntryC(title, content) {
    console.log(title, content);
    this.myServiceService.addEntry(title, content).subscribe(() => {
      this.refresh.emit();
    });
  }

}

