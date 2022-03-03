import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.css']
})
export class AccountsEditComponent implements OnInit, AfterViewInit {


  accoutData : any;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {    
  }

  ngAfterViewInit() {
    console.log("http://localosr:245/api/acounst/" + this.route.snapshot.paramMap.get("id"));
    //this.httpClient.get("http://localosr:245/api/acounst/" + this.id).subscribe((data) => this.accoutData = data );
  }

}
