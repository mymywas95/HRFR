import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectItem} from '../../ui-common/common/selectitem';
import {ConfirmDialogCustomComponent} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.component';
import {RoomNewComponent} from './room-new/room-new.component';
import {LanguageHelperService} from '../../shared/services/language-helper.service';
import {Message} from '../../ui-common/common/message';

@Component({
    selector: 'was-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
    roomTypeList: SelectItem[];
    roomList: SelectItem[];
    roomTypeSelected: string;
    roomSelected: string;
    isDetail = false;
    msgs: Message[] = [];

    @ViewChild(ConfirmDialogCustomComponent, {static: false})
    private confirmAction: ConfirmDialogCustomComponent;

    @ViewChild(RoomNewComponent, {static: false})
    private roomNew: RoomNewComponent;

    constructor(private languageHelperService: LanguageHelperService) {
    }

    ngOnInit() {
        this.roomTypeList = [
            {label: 'Phòng cho Thuê', value: 'room'},
            {label: 'Nhà cho Thuê', value: 'house'}
        ];
        this.roomTypeSelected = this.roomTypeList[0].value;
        this.roomList = [
            {label: 'Khu Vườn Lài', value: null},
            {label: 'Khu FPT', value: null}
        ];
        this.roomSelected = this.roomList[0].value;
    }

    back() {
        this.isDetail = false;
    }

    create() {
        this.roomNew.display = true;
    }

    createRoomAction(value) {
        this.roomNew.display = false;
        this.showToast({messageId: 'create_room_success'});
    }

    deleteGuestAction(value) {
        const data = {
            messageId: 'delete_guest',
            arrayStringValue: [value.year]
        };
        this.showConfirmOk(data);
    }


    initHeader() {
        if (this.roomTypeSelected) {
            const selectedData = this.roomTypeList.find(item => item.value === this.roomTypeSelected);
            let header = selectedData.label;
            if (this.roomTypeSelected === 'room') {
                const selectedRoomData = this.roomList.find(item => item.value === this.roomSelected);
                header = header + ' - ' + selectedRoomData.label;
            }
            if (this.isDetail) {
                header = header + ' - ' + 'phòng số 1';
            }
            return header;
        } else {
            return '';
        }
    }

    payAction(value) {
        const data = {
            messageId: 'pay_room',
            arrayStringValue: ['tháng 7/2019', 'Phòng cho Thuê - Khu Vườn Lài - phòng số 1']
        };
        this.showConfirmOk(data);
    }

    showDetail(data) {
        this.isDetail = true;
    }

    showConfirmOk(value) {
        this.confirmAction.trigger(value);
    }

    showToast(value) {
        const header = this.languageHelperService.getMessageText('message.' + value.messageId + '.title');
        const message = this.languageHelperService.getMessageText('message.' + value.messageId + '.content');
        const serverity = value.isSuccess && value.isSuccess === false ? 'error' : 'success';
        this.msgs = [];
        this.msgs.push({severity: serverity, summary: header, detail: message});
    }

    stop() {
        const data = {
            messageId: 'stop_room',
            accept: () => {
                this.stopAction();
            }
        };
        this.showConfirmOk(data);
    }

    stopAction() {
        this.showToast({messageId: 'stop_success'});
    }

    showDialog(data) {
        // this.confirmAction.
    }

}
