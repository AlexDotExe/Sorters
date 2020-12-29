import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'Bubble', component:BaseComponent},
{path: 'Quick', component:BaseComponent},
{path: 'Heap', component:BaseComponent},
{path: 'Insertion', component:BaseComponent},
{path: 'Merge', component:BaseComponent},
{path: 'Selection', component:BaseComponent},
{path: 'Radix', component:BaseComponent},
{path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
