import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, AfterViewInit  {

  productData : any;
  accountsList:any;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }
  ngOnInit() {    
  }

  ngAfterViewInit() {
     this.httpClient.get("assets/products.json").subscribe( (data) => { this.accountsList = data;});
     console.log("http://localosr:245/api/product/" + this.route.snapshot.paramMap.get("id"));
    //this.httpClient.get("http://localosr:245/api/acounst/" +this.route.snapshot.paramMap.get("id")).subscribe((data) => this.productData = data );
  }

}




