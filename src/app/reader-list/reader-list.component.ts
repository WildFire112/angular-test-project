import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})

export class ReaderListComponent implements OnInit {

  readers: any[];

  constructor(private bookService: BooksDataService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      bookService.getReaders(params.bookName).subscribe(readers => {
        this.readers = readers;
      });
    });
  }

  onNewReader(reader) {
    this.readers.push(reader);
  }

  onReaderDelete(index) {
    this.readers.splice(index, 1);
  }

  ngOnInit(): void { }
}
