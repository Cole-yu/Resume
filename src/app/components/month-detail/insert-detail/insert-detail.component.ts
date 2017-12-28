import { Component, OnInit } from '@angular/core';
import {debugOutputAstAsTypeScript} from '@angular/compiler';

@Component({
  selector: 'app-insert-detail',
  templateUrl: './insert-detail.component.html',
  styleUrls: ['./insert-detail.component.scss']
})
export class InsertDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public read(){
    //虽然th为标签名，但获取仍然要以cell来获取列的数量
    var thTxt=document.getElementsByTagName("table")[1].rows[0].cells;
    console.log(thTxt);
    var arr=[];
    for(let i=0,j=thTxt.length;i<j;i++){
      arr.push(thTxt[i].innerText);
    }
    console.log(arr);

    var rowsNum=document.getElementsByTagName("table")[1].rows.length;
    console.log(rowsNum);
    var cols=document.getElementsByTagName("table")[1].rows[0].cells.length;
    console.log(cols);
    for(let i=1;i<rowsNum;i++){
      for(let j=0;j<cols;j++){

          // 获取初始的单元格内容
          var tdTxt=document.getElementsByTagName("table")[1].rows[i].cells[j].innerText;
          console.log(tdTxt);

          // 单元格内容与标题合并，现在只是修改了函数中变量的内容，还需要把值赋给原来的单元格
          tdTxt=arr[j]+tdTxt;

          // 给原先的单元格赋予更改后的值
          document.getElementsByTagName("table")[1].rows[i].cells[j].innerText=tdTxt;
      }
    }
  }
}
