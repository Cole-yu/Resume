import { Component, OnInit } from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private el:any;

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

  //模态框
  public model(){
    var modal = document.getElementById('myModal');
    // 获取图片模态框，alt 属性作为图片弹出中文本描述
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    // modalImg.src = img.src;
  }
  //关闭事件
  public close() {
    // 获取 <span> 元素，设置关闭模态框按钮
    var span = document.getElementsByClassName("close")[0];
    // 点击 <span> 元素上的 (x), 关闭模态框
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

}
