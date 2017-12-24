import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private user={
    name:"喻飞翔",
    job:"Web前端工程师",
    picSrc:"../assets/picture/photo.png",
    picArt:"头像"
  };

  private aboutMe={
    title:"关于我",
    content:"拥有一年的软件开发项目经验，熟练运用html/CSS/JS/C#/SQL/aJax/jQuery/Bootstrap/Photoshop/Vue.js/Node.js等这方面内容，喜欢研究各种软件功能和app。闲暇时会学习一些其他开发语言（python）和框架（Angular1.x，React），平时也会用自己所学到的开发语言做一些生活中的小程序。了解grunt,glup等前端构建工具、git等版本控制工具的使用方法。理解前端模块化思想。",
    account:[
      {type:"github个人主页",iconSrc:"../assets/picture/github.png",url:"https://github.com/Cole-yu"},
      {type:"新浪微博",iconSrc:"../assets/picture/sina.png",url:"http://weibo.com/coleyu19932"}
    ]
  }

  private information= [
    {id:1,title:"毕业院校",value:"上海立信会计金融学院"},
    {id:2,title:"专业",value:"计算机科学与技术"},
    {id:3,title:"学历/学位",value:"本科"},
    {id:4,title:"出生日期",value:"1993.11.28"},
    {id:5,title:"电话",value:"18817934440"},
    {id:6,title:"邮箱",value:"1032577646@qq.com"}
  ];

  private experience=[
    {
      id:1,
      date:"2016/3-2017/11",
      company:"上海奥诺",
      content:"在团队中担任着ERP软件产品的Demo（Axure）的制作，并编写部分网页的代码（HTML/CSS/JS）。在做公司官网项目时，根据需求分析的要求进行网站代码实现，同时负责网站中图片的处理（Photoshop）。"
    },
    {
      id:2,
      date:"2015/10-2015/12",
      company:"兼职|中国邮政储蓄",
      content:"为中国邮政储蓄银行装订基建档案，按公司要求把资料分卷整理排序，并在excel上做目录，然后打码，装订成册，完成后折叠竣工图纸，最后装盒盖章。"
    }
  ];

  private skill=[
    {id:1,title:"Adobe Photoshop",value:"70"},
    {id:2,title:"Adobe Illstrator",value:"80"},
    {id:3,title:"Js/Jquery",value:"80"},
    {id:4,title:"Html/Css",value:"90"},
    {id:5,title:"Node.js",value:"70"},
    {id:6,title:"Axure",value:"90"},
    {id:7,title:"C#",value:"60"},
  ];

  private education=[
    {
      id:1,
      data:"2012/9-2016/6",
      university:"上海金融学院",
      content:"专业描述：在大学期间所学的课程有《计算机组成原理与系统结构》、《数据结构》、《微型计算机技术》、《软件测试》、《计算机操作系统》、《c++程序设计》、《软件工程》、《设计模式》等"
    },
  ]
}
