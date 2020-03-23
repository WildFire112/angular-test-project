import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  @Input() reader;
  @Input() readerIndex;
  @Output() childEvent = new EventEmitter();

  constructor(private bookService: BooksDataService) { }

  ngOnInit(): void {
  }

  delReader() {
    this.bookService.deleteReader(this.reader.name);
    this.childEvent.emit(this.readerIndex);
  }
}
