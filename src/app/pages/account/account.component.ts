import {Component, OnInit, ViewChild} from '@angular/core';
import {EventManagerService} from '../../shared/services/event-manager.service';
import {AccountNewComponent} from './account-new/account-new.component';

@Component({
    selector: 'was-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accountList: any[];
    accountSelected;
    cols: any[];
    @ViewChild(AccountNewComponent, {static: false})
    private accountNew: AccountNewComponent;

    constructor(private eventManagerService: EventManagerService) {
    }

    ngOnInit() {
        this.initData();
    }

    create() {
        this.accountNew.display = true;
        this.accountNew.initDefaultForm();
    }

    createAccountAction(value) {
        this.accountNew.display = false;
        const name = value.name;
        const data = {
            messageId: 'create_success',
            arrayStringValue: [name]
        };
        this.showToast(data);
    }

    delete(value) {
        const arrString = [value.name];
        const obj = {
            messageId: 'delete_confirm',
            arrayStringValue: arrString,
            accept: () => {
                this.deleteAccountAction(arrString);
            }
        };
        this.eventManagerService.broadcast({name: 'showDialogConfirm', data: obj});
    }

    deleteAccountAction(arrString) {
        const data = {
            messageId: 'delete_success',
            arrayStringValue: arrString
        };
        this.showToast(data);
    }

    initData() {
        this.cols = [
            {header: 'Họ và tên', field: 'name'},
            {header: 'Tên đăng nhập', field: 'username'},
            {header: 'Chức vụ', field: 'role'},
            {header: 'Trạng thái', field: 'status'},
        ];
        this.accountList = [];
        for (let i = 0; i < 100; i++) {
            this.accountList.push({
                id: i + 1, name: 'Nguyễn Văn A ' + (i + 1), username: 'nguyenvana' + (i + 1),
                role: 'admin', status: 'Đã kích hoạt'
            });
        }
        this.accountSelected = this.accountList[0];
    }

    showToast(value) {
        this.eventManagerService.broadcast({name: 'showToast', data: value});
    }

}
