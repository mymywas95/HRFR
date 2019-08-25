import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticComponent} from './statistic.component';
import {StatisticRoutingModule} from './statistic-routing.module';
import {ChartModule} from '../../ui-common/chart/chart';
import {ButtonModule} from '../../ui-common/button/button';
import {PanelModule} from '../../ui-common/panel/panel';

@NgModule({
    declarations: [StatisticComponent],
    imports: [
        CommonModule,
        StatisticRoutingModule,
        ChartModule,
        ButtonModule,
        PanelModule
    ]
})
export class StatisticModule {
}
