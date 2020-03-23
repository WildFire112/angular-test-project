import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-reader',
  templateUrl: './new-reader.component.html',
  styleUrls: ['./new-reader.component.css']
})
export class NewReaderComponent implements OnInit {
  
  @Output() childEvent = new EventEmitter();
  showForm = false;

  constructor(private bookService: BooksDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(myForm) {
    const fields = myForm.controls;
    this.showForm = false;
    this.activatedRoute.params.subscribe(params => {
      let reader = {
        name: fields.name.value,
        bookName: params.bookName
      };
      this.bookService.addReader(reader);
      this.childEvent.emit(reader);
    });
    
  }
}
