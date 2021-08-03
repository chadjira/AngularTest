import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IForm } from '../formMdel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  id: number = 0;
  forms: IForm[] = [];
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  baseUrl: string = ' http://localhost:3000/forms';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    this.http.get<IForm[]>(this.baseUrl).subscribe(
      data => {
        this.forms = data;
        console.log(this.forms);
      }
    )
  }
}
