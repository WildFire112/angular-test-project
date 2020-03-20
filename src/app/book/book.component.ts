import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  @Input() bookIndex;
  @Output() removeBook = new EventEmitter();
  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  delBook() {
    this.removeBook.emit(this.bookIndex);
  }

}
