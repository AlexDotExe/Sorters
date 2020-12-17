import { NgModule } from '@angular/core';
import {BubbleSortComponent} from './bubble-sort/bubble-sort.component';
import {QuickSortComponent} from './quick-sort/quick-sort.component';
import {HeapSortComponent} from './heap-sort/heap-sort.component';
import {MergeSortComponent} from './merge-sort/merge-sort.component';
import {InsertionSortComponent} from './insertion-sort/insertion-sort.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'bubble', component:BubbleSortComponent},
{path: 'quick', component:QuickSortComponent},
{path: 'heap', component:HeapSortComponent},
{path: 'insertion', component:InsertionSortComponent},
{path: 'merge', component:MergeSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
