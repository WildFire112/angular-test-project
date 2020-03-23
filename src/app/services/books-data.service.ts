import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  private books = [
    {
      name: "Book of books",
      author: "Arthur",
      cost: 300,
      pages: 325
    },
    {
      name: "Another book",
      author: "Some guy",
      cost: 69,
      pages: 228
    },
    {
      name: "Holy Bibel",
      author: "God",
      cost: 666,
      pages: 9000
    }
  ]

  private readers = [
    {
      name: 'Cierra Vega',
      bookName: 'Book of books'
    },
    {
      name: 'Alden Cantrell',
      bookName: 'Book of books'
    },
    {
      name: 'Kierra Gentry',
      bookName: 'Another book'
    },
    {
      name: 'Pierre Cox',
      bookName: 'Another book'
    },
    {
      name: 'Thomas Crane',
      bookName: 'Holy Bibel'
    }
  ]
  constructor() { }

  getBooks(): Observable<any[]> {
    return of(this.books);
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(index) {
    this.books.splice(index, 1);
  }

  getReaders(bookName: string): Observable<any[]> {
    return of(this.readers.filter(e => e.bookName == bookName));
  }
}
