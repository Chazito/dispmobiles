import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDashboardPage } from './news-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDashboardPageRoutingModule {}
