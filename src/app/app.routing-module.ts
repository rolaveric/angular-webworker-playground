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

const routes: Routes = [
  // If the path is *nothing*, go to the demo-tab
  {path: '', redirectTo: 'angular', pathMatch: 'full'},

  // Routes
  {
    path: 'angular',
    component: AngularComponent
  },
  // {
  //   path: 'lazy',
  //   loadChildren: './lazy/lazy.module#LazyModule'
  // },
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'ng-bootstrap',
    component: NgBootstrapComponent
  },
  {
    path: 'ngx-bootstrap',
    component: NgxBootstrapComponent
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
