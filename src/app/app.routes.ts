import { Routes } from '@angular/router';
import {TablesComponent} from './components/tables/tables.component';
import {ContactComponent} from './components/contact/contact.component';
import {NewsComponent} from './components/news/news.component';
import {AboutComponent} from './components/about/about.component';
import {PasgenotfoundComponent} from './components/pasgenotfound/pasgenotfound.component';

export const routes: Routes = [
  {path: 'home', component: TablesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'news', component: NewsComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PasgenotfoundComponent}
];
