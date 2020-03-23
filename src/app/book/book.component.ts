import { Component, OnInit, Input } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  @Input() bookIndex;
  showInfo = false;

  constructor(private bookService: BooksDataService) { }

  ngOnInit(): void {
  }

  delBook() {
    this.bookService.deleteBook(this.bookIndex);
  }

}
