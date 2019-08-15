import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogCustomComponent} from './confirm-dialog-custom.component';
import {DialogModule} from '../../../ui-common/dialog/dialog';
import {ButtonModule} from '../../../ui-common/button/button';

@NgModule({
    declarations: [ConfirmDialogCustomComponent],
    exports: [
        ConfirmDialogCustomComponent
    ],
    imports: [
        CommonModule,
        DialogModule,
        ButtonModule
    ]
})
export class ConfirmDialogCustomModule {
}
