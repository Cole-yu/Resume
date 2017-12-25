import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { InsertDetailComponent } from './insert-detail/insert-detail.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
import {RouterModule} from '@angular/router';
import {MonthDetailRouter} from './month-detail.router';
import {ViewDetailModule} from './view-detail/view-detail.module';
import {InsertDetailModule} from './insert-detail/insert-detail.module';
import {UpdateDetailModule} from './update-detail/update-detail.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MonthDetailRouter),
    ViewDetailModule,
    UpdateDetailModule,
    InsertDetailModule
  ],
  exports:[RouterModule],
  declarations: [ViewDetailComponent, InsertDetailComponent, UpdateDetailComponent]
})
export class MonthDetailModule {



}
