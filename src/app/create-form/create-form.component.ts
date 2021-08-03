import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IForm } from '../formMdel';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  baseUrl: string = 'http://localhost:3000/forms';

  forms: IForm = {};
  newForm: IForm = {};
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addNewProduct() {

    this.http.post(this.baseUrl, this.newForm).subscribe(
      data => { this.router.navigate(['/']) }
    )
  }

}
