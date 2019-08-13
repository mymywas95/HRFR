import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeTrackingComponent} from './home-tracking/home-tracking.component';
import {PanelModule} from '../../ui-common/panel/panel';
import {ChartModule} from '../../ui-common/chart/chart';

@NgModule({
    declarations: [HomeComponent, HomeTrackingComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PanelModule,
        ChartModule
    ]
})
export class HomeModule {
}
