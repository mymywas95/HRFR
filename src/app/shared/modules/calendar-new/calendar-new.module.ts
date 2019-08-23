import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarNewComponent} from './calendar-new.component';
import {DialogModule} from '../../../ui-common/dialog/dialog';
import {InputTextModule} from '../../../ui-common/inputtext/inputtext';
import {ButtonModule} from '../../../ui-common/button/button';
import {ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from '../../../ui-common/calendar/calendar';
import {GrowlModule} from '../../../ui-common/growl/growl';

@NgModule({
    declarations: [CalendarNewComponent],
    exports: [
        CalendarNewComponent
    ],
    imports: [
        CommonModule,
        DialogModule,
        InputTextModule,
        ButtonModule,
        CalendarModule,
        GrowlModule,
        ReactiveFormsModule
    ]
})
export class CalendarNewModule {
}
