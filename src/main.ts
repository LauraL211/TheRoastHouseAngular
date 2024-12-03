import { bootstrapApplication } from '@angular/platform-browser';
import { HomeListComponent } from './app/home-list/home-list.component';

bootstrapApplication(HomeListComponent)
  .catch(err => console.error(err));