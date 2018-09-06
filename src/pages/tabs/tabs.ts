import { Component } from '@angular/core';
import { CdListPage } from '../cd/cdList';
import { BookListPage } from '../book/bookList';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  cdListPageRoot = CdListPage;
  bookListPageRoot = BookListPage;

  constructor() {

  }
}
