import { Component } from '@angular/core';
import {appRoutes} from './app.router';
import {MonthDetailComponent} from './components/month-detail/month-detail.component';
import {HomeComponent} from './components/home/home.component';
// import {ViewDetailComponent} from './components/month-detail/view-detail/view-detail.component';
// import {InsertDetailComponent} from './components/month-detail/insert-detail/insert-detail.component';
// import {UpdateDetailComponent} from './components/month-detail/update-detail/update-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(){
  }

  public navbar=[
    {id:0,name:"Home",status:"0",link:"/home"},
    {id:1,name:"Product",status:"0",link:"/pro"},
    {id:2,name:"Reusume",status:"0",link:"/resume"},
    {id:3,name:"Knowledge",status:"0",link:"/know"},
    {id:3,name:"MonthDetail",status:"1",link:"/month"},
  ]





}
