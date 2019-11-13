import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm();
  }

  submit() {
    this.http.post('api/login', this.loginForm.value);
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      captcha: this.formBuilder.group({
        code: [null, Validators.required]
      })
    });
  }
}
