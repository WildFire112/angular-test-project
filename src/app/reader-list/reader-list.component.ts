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

  constructor(private bookService: BooksDataService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getReaders(params.bookName)
        .subscribe(readers => this.readers = readers)
    });
  }
}
