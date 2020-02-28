import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  @Output() dataChange = new EventEmitter();

  showInfo = false;

  constructor() { }

  isOld() {
    return (this.book.cost > 200)
  }

  ngOnInit(): void {
  }

  onChange() {
    this.dataChange.emit(new Date());
  }

}
