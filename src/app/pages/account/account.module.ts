import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account-routing.module';
import {TableModule} from '../../ui-common/table/table';
import {DialogModule} from '../../ui-common/dialog/dialog';
import {ButtonModule} from '../../ui-common/button/button';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';
import {ConfirmDialogCustomModule} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [AccountComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        TableModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        ConfirmDialogCustomModule,
        FormsModule
    ]
})
export class AccountModule {
}
