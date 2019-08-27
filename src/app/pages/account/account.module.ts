import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account-routing.module';
import {TableModule} from '../../ui-common/table/table';
import {DialogModule} from '../../ui-common/dialog/dialog';
import {ButtonModule} from '../../ui-common/button/button';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountNewComponent} from './account-new/account-new.component';
import {DropdownModule} from '../../ui-common/dropdown/dropdown';

@NgModule({
    declarations: [AccountComponent, AccountNewComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        TableModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        DialogModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule
    ]
})
export class AccountModule {
}
