import { Component, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import {NavItem} from "./theme/NavItem";
import {NavService} from "./theme/NavService";
import { delay } from 'rxjs/operators';
import {VERSION} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  panelOpenState = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver,private navService: NavService) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)']) 
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

      this.navService.appDrawer = this.appDrawer;
  }
  title = 'POS';

  @ViewChild('appDrawer')
  appDrawer!: ElementRef;

  version = VERSION;
  
  navItems: NavItem[] = [
    {
      displayName: 'Accounts',
      iconName: 'account_box',
      children: [
        {
          displayName: 'List',
          iconName: 'view_list',
          route: 'accounts',
        },
        {
          displayName: 'Add',
          iconName: 'add_circle',
          route: 'accounts/add',          
        }       
      ]
    },    
    {
      displayName: 'Product',
      iconName: 'library_add',
      children: [
        {
          displayName: 'List',
          iconName: 'view_list',
          route: 'product',
        },
        {
          displayName: 'Add',
          iconName: 'add_circle',
          route: 'product/add',          
        }       
      ]
    },    
  ];

 
  
}
