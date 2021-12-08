import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-standard-behaviour',
  templateUrl: './standard-behaviour.component.html',
  styleUrls: ['./standard-behaviour.component.scss']
})
export class StandardBehaviourComponent implements OnInit {
  simpleForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    console.log('yo');
  }

  get name() {
    return this.simpleForm.get("name");
  }

  get email() {
    return this.simpleForm.get("email");
  }

  getNameErrorMessage() {
    if (this.name?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  getEmailErrorMessage() {
    if (this.email?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  submitForm() {
    if (this.email?.invalid || this.name?.invalid) return;
    alert("Form submitted successfully");
  }


}
