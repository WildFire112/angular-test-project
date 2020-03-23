import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  showForm = false;

  constructor(private bookService: BooksDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm) {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.bookService.addBook({
      name: fields.name.value,
      author: fields.author.value,
      cost: fields.cost.value,
      pages: fields.pages.value,
    })
  }

}
