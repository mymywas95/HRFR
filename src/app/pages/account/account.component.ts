import {Component, OnInit} from '@angular/core';
import {EventManagerService} from '../../shared/services/event-manager.service';

@Component({
    selector: 'was-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accountList: any[];
    accountSelected;
    cols: any[];

    constructor(private eventManagerService: EventManagerService) {
    }

    ngOnInit() {
        this.initData();
    }

  delete(value) {
    const obj = {
      messageId: 'delete_confirm',
      arrayStringValue: [value.name]
    };
    this.eventManagerService.broadcast({name: 'showDialogConfirm', data: obj});
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
        this.accountSelected = this.accountSelected[0];
    }

}
