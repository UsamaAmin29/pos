import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';



import { AccountsListComponent } from './Accounts/accounts-list/accounts-list.component';
import { AccountsAddComponent } from './Accounts/accounts-add/accounts-add.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsEditComponent } from './Accounts/accounts-edit/accounts-edit.component';
import { MenuListItemComponent } from './theme/menu-list-item/menu-list-item.component';

import { NavService } from "./theme/NavService";
import { AccountInfoDialogComponent } from './Accounts/account-info-dialog/account-info-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';

import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AccountsAddComponent,
    AccountsEditComponent,
    MenuListItemComponent,
    AccountInfoDialogComponent,    
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,    
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
