import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[];

  constructor(private bookservice: BooksDataService) {
    bookservice.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit(): void {
  }

}
