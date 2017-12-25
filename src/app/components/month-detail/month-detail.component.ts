import { Component, OnInit } from '@angular/core';
import {InsertDetailComponent} from './insert-detail/insert-detail.component';
import {UpdateDetailComponent} from './update-detail/update-detail.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {tr} from 'ngx-bootstrap';
import {parse} from 'ts-node/dist';

@Component({
  selector: 'app-month-detail',
  templateUrl: './month-detail.component.html',
  styleUrls: ['./month-detail.component.scss']
})
export class MonthDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public charge:any="";

  public monthDetails=[
    {id:0,code:"1",month:"2017年3月",electric:"16.95",water:"",gas:"",person:"5",status:"0"},
    {id:1,code:"2",month:"2017年4月",electric:"23.12",water:"177.00",gas:"",person:"6",status:"1"},
  ]

  public calculate(elec:number,water:any,gas:any):any{
    if(typeof water === 'number'&&typeof gas==='number'){
      this.charge=water+elec+gas;
    }
    else{
      this.charge=elec;
    }
  }

  totalItems = 64;
  currentPage = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  public viewDetail(code:string){
      //console.log(code);
      //console.log(typeof(code));
      let index=parseInt(code);
      console.log(this.monthDetails[index-1]);
      // let e=event||window.event;
      // console.log(e);
      // console.log(e.screenX,e.screenY);
  }

}
