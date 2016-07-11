import { Component, OnInit } from "@angular/core";
import { FormBuilder, ControlGroup, Validators } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'my-signup',
  templateUrl: 'signup.template.html'
})
export class SignupComponent implements OnInit {
  myForm: ControlGroup;
  constructor(private _fb:FormBuilder) {}

  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
