import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {

  entryForm: any;

  constructor(private myServiceService: MyServiceService, public router: Router, route: ActivatedRoute,) {
    route.params.subscribe(params => {
      myServiceService.getEntryId(params.id).subscribe(entry => {
        this.entryForm = entry;

      });
    });
  }

  ngOnInit() {
  }

  addEntryC(title, content) {
    console.log('Hola')
    this.myServiceService.addEntry(title, content);
    console.log(this.entryForm.title)
  }


  saveComment() {
    console.log(this.entryForm);
    this.myServiceService.addEntry(this.title,this.comment).subscribe(() =>{

    });
    this.entryForm = "";
  }

}
