import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { HeapSortComponent } from './heap-sort/heap-sort.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    QuickSortComponent,
    MergeSortComponent,
    HeapSortComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
