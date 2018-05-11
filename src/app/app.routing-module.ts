import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularComponent } from './angular/angular.component';
import { MaterialComponent } from './material/material.component';
import { AngularModule } from './angular/angular.module';
import { MaterialModule } from './material/material.module';
import { NgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { NgxBootstrapNavComponent } from './ngx-bootstrap/ngx-bootstrap-nav.component';
import { NgBootstrapNavComponent } from './ng-bootstrap/ng-bootstrap-nav.component';
import { MaterialNavComponent } from './material/material-nav.component';
import { AngularNavComponent } from './angular/angular-nav.component';

const routes: Routes = [
  // If the path is *nothing*, go to the demo-tab
  {path: '', redirectTo: 'angular', pathMatch: 'full'},

  // Routes
  {
    path: 'angular',
    children: [
      {
        path: '',
        component: AngularComponent
      },
      {
        path: '',
        component: AngularNavComponent,
        outlet: 'sidenav'
      }
    ]
  },
  // {
  //   path: 'lazy',
  //   loadChildren: './lazy/lazy.module#LazyModule'
  // },
  {
    path: 'material',
    children: [
      {
        path: '',
        component: MaterialComponent
      },
      {
        path: '',
        component: MaterialNavComponent,
        outlet: 'sidenav'
      }
    ]
  },
  {
    path: 'ng-bootstrap',
    children: [
      {
        path: '',
        component: NgBootstrapComponent
      },
      {
        path: '',
        component: NgBootstrapNavComponent,
        outlet: 'sidenav'
      }
    ]
  },
  {
    path: 'ngx-bootstrap',
    children: [
      {
        path: '',
        component: NgxBootstrapComponent
      },
      {
        path: '',
        component: NgxBootstrapNavComponent,
        outlet: 'sidenav'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    AngularModule,
    MaterialModule,
    NgBootstrapModule,
    NgxBootstrapModule
  ],
  providers: [],
  exports: [
    RouterModule,

    AngularModule,
    MaterialModule,
    NgBootstrapModule,
    NgxBootstrapModule
  ]
})
export class AppRoutingModule {}
