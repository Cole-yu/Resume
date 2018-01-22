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

     let month_string=(date.getMonth()+1).toString();   //getMonth()获取的是一个数组，为[0,11]的数组
     //todo 调用ttTime函数报错
      //let month=this.ttTime(month_string);
      let month=month_string.substring(month_string.length-2,month_string.length);

     let day_string=date.getDate().toString();
     let day=day_string.substring(day_string.length-2,day_string.length);

     let hour_string="0"+date.getHours().toString();
     let hour=hour_string.substring(hour_string.length-2,hour_string.length);

     let min_string="0"+date.getMinutes().toString();
     let min=min_string.substring(min_string.length-2,min_string.length);

     let sec_string="0"+date.getSeconds().toString();
     let sec=sec_string.substring(sec_string.length-2,sec_string.length);

     this.sysTime=year+"年"+month+"月"+day+"日"+" "+hour+":"+min+":"+sec;
     // console.log(this.sysTime);

    //innerHTML与innerText的区别，table用的是innerText
     document.getElementsByClassName("time")[0].innerHTML=this.sysTime;
  }


  //设置时间格式的函数 substring(start,end);从start开始，end结束，var str="abcde" str.substring(3,5)  //de---0a/1b/2c/3d/4e/5

  //todo 不知道为什么在Time中调用ttTime会出现报错
  public ttTime(time:string):any {
    console.log("ok");
    let time_string="0"+time;
    time_string=time_string.substring(time_string.length-2,time_string.length);
    console.log(time_string);
    return time_string
  }

  public settime(){
    //在调用时，先执行一边Time函数，否则Time加入到事件队列中，会有1000ms的空窗期
    this.Time();
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
