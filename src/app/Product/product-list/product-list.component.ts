import { HttpClient } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { productInfoDialogComponent } from '../product-info-dialog/product-info-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild("Paginator") 
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort! : MatSort;

  resultsLength = 0;

  deleted: boolean = false;

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'name', 'openingStock', 'vendor', "account",'actions'];

  constructor(public dialog: MatDialog,private httpClient: HttpClient){ //,p
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit(): void {
    this.httpClient.get("assets/products.json").subscribe(data =>{
      this.dataSource = new MatTableDataSource<any>(data as []); 
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }    
  }

  openDialog(row :any) {    
    this.dialog.open(productInfoDialogComponent, { data: row } );
  }

  delete(row :any){
      //delte 
      //this.httpClient.delete("http://localosr:245/api/acounst/" + row.id).subscribe(() => this.deleted = true);
      console.log("deleted data: ",row);
      this.deleted = true;
  }
}