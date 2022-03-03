import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-account-info-dialog',
  templateUrl: './account-info-dialog.component.html',
  styleUrls: ['./account-info-dialog.component.css']
})
export class AccountInfoDialogComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
