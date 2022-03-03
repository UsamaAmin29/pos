import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// accounts imports
import { AccountsAddComponent } from './Accounts/accounts-add/accounts-add.component';
import { AccountsListComponent } from './Accounts/accounts-list/accounts-list.component';
import { AccountsEditComponent} from './Accounts/accounts-edit/accounts-edit.component'; 
// products imports
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductEditComponent} from './Product/product-edit/product-edit.component';


import { AppComponent } from './app.component';


const routes: Routes = [
  // accounts imports
  { path: 'accounts', component:AccountsListComponent },
  { path: 'accounts/add', component:AccountsAddComponent },
  { path: 'accounts/edit/:id', component:AccountsEditComponent},
// products imports
  { path: 'product', component:ProductListComponent },
  { path: 'product/add', component:ProductAddComponent },
  { path: 'product/edit/:id', component:ProductEditComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {  
}
