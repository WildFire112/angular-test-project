import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  name = "Book of books";
  author = "Arthur";
  cost = "300$";

  pages = 325;
  characters = [
    'Tom Billson',
    'Mike Falcon',
    'Kile Moltis'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
