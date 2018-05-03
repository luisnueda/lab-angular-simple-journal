import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';


export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home',  component: EntryListComponent },
   { path: 'home/:id', component: SingleEntryComponent }
];
