import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ActivitiesLogComponent} from './activities-log/activities-log.component';
import {CurrentActivityComponent} from './current-activity/current-activity.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {UsefulResComponent} from './useful-res/useful-res.component';
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'activities-log', component: ActivitiesLogComponent},
  { path: 'current-activity', component: CurrentActivityComponent},
  { path: 'useful', component: UsefulResComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
