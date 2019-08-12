import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cvs-form',
  templateUrl: './cvs-form.component.html',
  styleUrls: ['./cvs-form.component.scss']
})
export class CvsFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        postNumber: new FormControl('', Validators.required),
        addressContent: new FormControl('', Validators.required)
      })
    });
  }

}
