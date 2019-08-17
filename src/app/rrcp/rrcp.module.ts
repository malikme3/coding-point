import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { RRCpComponent } from './rrcp.component';
import { PagesRoutingModule } from './rrcp-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbMenuModule, HomePageModule, MiscellaneousModule],
  declarations: [RRCpComponent],
})
export class RRCpModule {}
