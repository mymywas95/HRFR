import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeTrackingComponent} from './home-tracking/home-tracking.component';
import {PanelModule} from '../../ui-common/panel/panel';
import {ChartModule} from '../../ui-common/chart/chart';
import {FullCalendarModule} from '../../ui-common/fullcalendar/fullcalendar';
import {DialogModule} from '../../ui-common/dialog/dialog';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';
import {CalendarModule} from '../calendar/calendar.module';
import {CheckboxModule} from '../../ui-common/checkbox/checkbox';
import {ButtonModule} from '../../ui-common/button/button';
import {TabViewModule} from '../../ui-common/tabview/tabview';
import {CodeHighlighterModule} from '../../ui-common/codehighlighter/codehighlighter';

@NgModule({
    declarations: [HomeComponent, HomeTrackingComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PanelModule,
        ChartModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        FullCalendarModule
    ]
})
export class HomeModule {
}
