import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { NewReaderComponent } from './new-reader/new-reader.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'readers/:bookName',
    component: ReaderListComponent
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NewBookComponent,
    BookListComponent,
    ReaderListComponent,
    NewReaderComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
