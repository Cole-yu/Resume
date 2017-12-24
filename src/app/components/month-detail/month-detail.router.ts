import {RouterModule,Routes} from '@angular/router';
import {NgModel} from '@angular/forms';

import {MonthDetailComponent} from './month-detail.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {UpdateDetailComponent} from './update-detail/update-detail.component';
import {InsertDetailComponent} from './insert-detail/insert-detail.component';

export const MonthDetailRouter:Routes=[{
  path:"month",component:MonthDetailComponent,
  children:[
    {path:"",redirectTo:'index',pathMatch: 'full'},
    {path:"index",component:MonthDetailComponent},
    {path:"view",component:ViewDetailComponent},
    {path:"insert",component:InsertDetailComponent},
    {path:"update",component:UpdateDetailComponent},
  ]
}]
