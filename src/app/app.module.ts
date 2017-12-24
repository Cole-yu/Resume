import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {KnowledgeComponent} from './components/knowledge/knowledge.component';
import {Router, RouterModule} from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ResumeComponent } from './components/resume/resume.component';
import { MonthDetailComponent } from './components/month-detail/month-detail.component';
import { ProductComponent } from './components/product/product.component';
import { MonthDetailModule} from './components/month-detail/month-detail.module';
import { FormsModule }   from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination'; // <-- NgModel lives here
import {CarouselModule} from 'ngx-bootstrap';
import {MonthDetailRouter} from './components/month-detail/month-detail.router';
// import {InsertDetailModule} from './components/month-detail/insert-detail/insert-detail.module';
// import {ViewDetailModule} from './components/month-detail/view-detail/view-detail.module';
// import {UpdateDetailModule} from './components/month-detail/update-detail/update-detail.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowledgeComponent,
    ResumeComponent,
    MonthDetailComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,

    //如果我们想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的enableTracing选项。它会把每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试。我们只需要把enableTracing: true选项作为第二个参数传给RouterModule.forRoot()方法就可以了。
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),    // <-- debugging purposes only)

    RouterModule.forRoot(appRoutes),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,                            // <-- import the FormsModule before binding with [(ngModel)]要使用ngModel必须引入FormsModule
    MonthDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
