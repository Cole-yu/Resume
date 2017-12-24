import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {KnowledgeComponent} from './components/knowledge/knowledge.component';
import {Router, RouterModule} from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    //如果我们想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的enableTracing选项。它会把每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试。我们只需要把enableTracing: true选项作为第二个参数传给RouterModule.forRoot()方法就可以了。
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only)
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
