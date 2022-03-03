import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, AfterViewInit {

  accountsList:any;

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
     this.httpClient.get("assets/accounts.json").subscribe( (data) => { this.accountsList = data;});
  }

  ngOnInit(): void {
  }
}
