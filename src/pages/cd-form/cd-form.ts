import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LibraryService } from '../../service/library.service';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-cd-form',
    templateUrl: 'cd-form.html',
})
export class cdFormPage  implements OnInit{
  cdForm : FormGroup
  constructor(private fb: FormBuilder,private navCrtl: NavController, private libraryservice : LibraryService) {}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.cdForm = this.fb.group({
      name: ['', Validators.required],
    })
  }

  onSubmitCD() {
    this.libraryservice.addCD(this.cdForm.get('name').value);
    this.navCrtl.pop();
  }


}