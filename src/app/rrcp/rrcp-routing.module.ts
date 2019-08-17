import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RRCpComponent } from './rrcp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: RRCpComponent,
    children: [
      {
        path: 'dashboard',
        component: HomePageComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
