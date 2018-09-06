import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LibraryService } from '../../service/library.service';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-book-form',
    templateUrl: 'book-form.html',
})
export class BookFormPage  implements OnInit{
  bookForm : FormGroup
  constructor(private fb: FormBuilder,private navCrtl: NavController, private libraryservice : LibraryService) {}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
    })
  }

  onSubmitBook() {
    this.libraryservice.addBook(this.bookForm.get('name').value);
    this.navCrtl.pop();
  }


}