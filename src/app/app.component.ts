import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    {
      name: "Book of books",
      author: "Arthur",
      cost: 300,
      pages: 325,
      characters: [
        'Tom Billson',
        'Mike Falcon',
        'Kile Moltis'
      ]
    },
    {
      name: "Another book",
      author: "Some guy",
      cost: 69,
      pages: 228,
      characters: [
        'Mike Tyson',
        'Bruse Lee',
        'Jackie Chan',
        'Rock Johnson'
      ]
    },
    {
      name: "Holy Bibel",
      author: "God",
      cost: 666,
      pages: 9000,
      characters: [
        'Jesus',
        'Satan',
        'Judas'
      ]
    }
  ]
}
