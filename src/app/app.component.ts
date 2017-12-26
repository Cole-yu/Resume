import {Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit{

  constructor(){
  }

  public sysTime="";
  public title="601室费用档案管理系统";

  //组件被创建时生成
  ngOnInit() {
    this.settime()
  }

  public Time(){
     var date=new Date();
    //console.log(typeof(date.getFullYear().toString()));         //数字2017转为文字
     let year=date.getFullYear().toString();
     let month=date.getMonth().toString();
     let day=date.getDate().toString();
     this.sysTime=year+month+day;
     console.log(this.sysTime);
  }

  public settime(){
    setInterval(this.Time,1000);
  }

  public navbar=[
    {id:0,name:"Home",status:"0",childStatus:false,link:"/home",children:[
        {id:10,name:"单位管理",status:"0",link:"./unit"},
        {id:20,name:"单位类别管理",status:"0",link:"./unitType"}
      ]
    },
    {id:1,name:"Product",status:"0",childStatus:false,link:"/pro",children:[
      {id:11,name:"单位管理",status:"0",link:"./unit"},
      {id:12,name:"单位类别管理",status:"0",link:"./unitType"}
      ]
    },
    {id:2,name:"Reusume",status:"0",childStatus:false,link:"/resume",children:[
        {id:21,name:"单位管理",status:"0",link:"./unit"},
        {id:22,name:"单位类别管理",status:"0",link:"./unitType"}
      ]
    },
    {id:3,name:"Knowledge",status:"0",childStatus:false,link:"/know",children:[
        {id:31,name:"单位管理",status:"0",link:"./unit"},
        {id:32,name:"单位类别管理",status:"0",link:"./unitType"}
      ]
    },
    {id:3,name:"MonthDetail",status:"1",childStatus:false,link:"/month",children:[]},
  ]

  // 菜单栏开关按钮
  public show(index:number){
    if(this.navbar[index].childStatus==true){
      this.navbar[index].childStatus=false;
    }
    else {
      for(let i=0;i<this.navbar.length;i++){
        this.navbar[i].childStatus=false;
      }
      this.navbar[index].childStatus=true;
    }
  }




}
