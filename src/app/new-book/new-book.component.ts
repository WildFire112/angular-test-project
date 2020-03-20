import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  @Output() book = new EventEmitter();
  showForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm) {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.book.emit({
      name: fields.name.value,
      author: fields.author.value,
      cost: fields.cost.value,
      pages: fields.pages.value,
    })
  }

}
