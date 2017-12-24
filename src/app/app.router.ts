import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {KnowledgeComponent} from "./components/knowledge/knowledge.component";

export const appRoutes:Routes=[
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"know",component:KnowledgeComponent},
  {path:"**",component:HomeComponent}
]



