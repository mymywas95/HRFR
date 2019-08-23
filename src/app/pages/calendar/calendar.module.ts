import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {TableModule} from '../../ui-common/table/table';
import {ConfirmDialogCustomModule} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';
import {ButtonModule} from '../../ui-common/button/button';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        TableModule,
        ConfirmDialogCustomModule,
        InputTextModule,
        ButtonModule,
        FormsModule
    ]
})
export class CalendarModule {
}
