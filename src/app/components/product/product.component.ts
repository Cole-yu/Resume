import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public product=[
    {id:1,code:"CD0001",name:"手机",price:5000},
    {id:2,code:"CD0002",name:"电视",price:4000},
    {id:3,code:"CD0003",name:"电脑",price:7000},
    {id:4,code:"CD0004",name:"ipad",price:3000},
    {id:5,code:"CD0005",name:"冰箱",price:6000},
  ]

  public el:any;
  //单击全选事件
  public doCheckAll(){
    this.el=document.getElementsByTagName('input');
    //console.log(this.el);
    // console.log(this.el[1].checked);
    // console.log(this.el[1].name);
    // console.log(this.el[1].type);
    if(this.el[0].checked==true)
    {
      console.log(this.el[0].id);
      for(let i=1;i<this.el.length;i++){
        this.el[i].checked=true;
      }
    }
    else{
      for(let i=1;i<this.el.length;i++){
        this.el[i].checked=false;
      }
    }
  }

  //单击某个具体的复选框事件
  public checkOne(){
    let arr=[];                                  //arr数组不能放在checkOne函数外，否则会产生累加效果，1，3，6，需要每次触发时重新统计
    this.el=document.getElementsByTagName('input');
    for(let i=1;i<this.el.length;i++){                      //除“全部”这个复选框外遍历一次，把值添加到arr数组中
      if(this.el[i].checked==true){
        arr.push(this.el[i].checked);
      }
    }
    // console.log(arr);
    if(arr.length==(this.el.length-1)){                    //如果arr的长度和el长度相差为1，则"全选"复选框为true,否则为false
      this.el[0].checked=true;
    }
    else {
      this.el[0].checked=false;
    }
  }

  public sel=[];            //从产品列表中获取产品的编号，形成的数组，产品编号数组
  private chose=[];         //刷选出来的被选中的产品的列表信心，需要在右边展示出来
  public selected(){
      this.chose=[];           //每次执行函数需要初始化chose和sel数组
      this.sel=[];
      this.el=document.getElementsByTagName('input');
      console.log(this.el);
      for(let i=1;i<this.el.length;i++){                //如果该值被选中，记录下这个产品的编号（从1开始，和产品编号刚好对齐），因为0为全选的input，
        if(this.el[i].checked==true){
          this.sel.push(i);
        }
      }
      console.log(this.sel);
      for(let j=0;j<this.sel.length;j++){           //查看编号数组，从product数组中筛选出选中的产品信息
        let index=this.sel[j];
        this.chose.push(this.product[index-1])      //产品编号1的产品为数组[0],所以需要减去1；
      }
      console.log(this.chose);
  }
}
