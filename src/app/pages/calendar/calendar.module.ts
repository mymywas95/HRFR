import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {TableModule} from '../../ui-common/table/table';
import {ConfirmDialogCustomModule} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';
import {ButtonModule} from '../../ui-common/button/button';

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        TableModule,
        ConfirmDialogCustomModule,
        ButtonModule
    ]
})
export class CalendarModule {
}
