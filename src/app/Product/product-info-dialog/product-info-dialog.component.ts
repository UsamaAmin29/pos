import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-account-info-dialog',
  templateUrl: './product-info-dialog.component.html',
  styleUrls: ['./product-info-dialog.component.css']
})
export class productInfoDialogComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
