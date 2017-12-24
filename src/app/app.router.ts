import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {KnowledgeComponent} from "./components/knowledge/knowledge.component";
import {ResumeComponent} from './components/resume/resume.component';
import {MonthDetailComponent} from './components/month-detail/month-detail.component';
import {ProductComponent} from './components/product/product.component';
// import {InsertDetailComponent} from './components/month-detail/insert-detail/insert-detail.component';
// import {ViewDetailComponent} from './components/month-detail/view-detail/view-detail.component';
// import {UpdateDetailComponent} from './components/month-detail/update-detail/update-detail.component';
import {MonthDetailRouter} from './components/month-detail/month-detail.router';

export const appRoutes:Routes=[
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"know",component:KnowledgeComponent},
  {path:"resume",component:ResumeComponent},
  // {path:"month",component:MonthDetailComponent},      //移除monthDetail的初始路由，移动到自身的业务模块中去
  {path:"pro",component:ProductComponent},
  {path:"**",component:HomeComponent}
]


