import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectItem} from '../../ui-common/common/selectitem';
import {ConfirmDialogCustomComponent} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.component';
import {RoomNewComponent} from './room-new/room-new.component';
import {LanguageHelperService} from '../../shared/services/language-helper.service';
import {Message} from '../../ui-common/common/message';
import {ConfirmDialogCustomService} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.service';
import {RoomGuestComponent} from './room-guest/room-guest.component';
import {CalendarNewComponent} from '../../shared/modules/calendar-new/calendar-new.component';
import {EventManagerService} from '../../shared/services/event-manager.service';

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

    @ViewChild(RoomGuestComponent, {static: false})
    private roomGuest: RoomGuestComponent;

    @ViewChild(CalendarNewComponent, {static: false})
    private calendarNew: CalendarNewComponent;

    constructor(private languageHelperService: LanguageHelperService,
                private confirmDialogCustomService: ConfirmDialogCustomService,
                private eventManagerService: EventManagerService) {
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
        this.roomNew.initDefaultForm();
        this.roomNew.display = true;
    }

    createCalendar() {
        this.calendarNew.display = true;
    }

    createGuestEmitAction(arrString?) {
        this.roomGuest.currentArrayString = arrString ? arrString : this.initHeader();
        this.roomGuest.initDefaultForm();
        this.roomGuest.display = true;
    }

    createRoomAction(value) {
        this.roomNew.display = false;
        let name = value.roomType;
        if (value.roomType === 'room') {
            name = name + ' - ' + value.roomArea;
        }
        name = name + ' - ' + value.name;
        if (value.roomType === 'area') {
            const data = {
                messageId: 'create_success',
                arrayStringValue: [name]
            };
            this.showToast(data);
        } else {
            const arrString =  [name, name];
            this.showDetail(true);
            this.showConfirmOk({
                messageId: 'create_guest_confirm',
                arrayStringValue: arrString,
                accept: () => {
                    this.createGuestEmitAction(arrString);
                }
            });
        }
    }

    createGuestAction(value) {
        this.roomGuest.display = false;
        const arrayString = [value.form.name, value.currentArrayString];
        const data = {
            messageId: 'create_guest_continous_confirm',
            arrayStringValue: arrayString
        };
        this.showConfirmOk(data);
    }

    deleteGuestEmitAction(value) {
        const arrString = [value.name];
        const data = {
            messageId: 'delete_confirm',
            arrayStringValue: arrString,
            accept: () => {
                this.deleteGuestAction(arrString);
            }
        };
        this.showConfirmOk(data);
    }

    deleteGuestAction(arrString) {
        const data = {
            messageId: 'delete_success',
            arrayStringValue: arrString
        };
        this.showToast(data);
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

    payEmitAction(value) {
        const arrayValue = ['tháng 7/2019', 'Phòng cho Thuê - Khu Vườn Lài - phòng số 1'];
        const data = {
            messageId: 'pay_room',
            arrayStringValue: arrayValue,
            accept: () => {
                this.payAction(arrayValue);
            }
        };
        this.showConfirmOk(data);
    }

    payAction(arrayValue) {
        const data = {
            messageId: 'pay_room_success',
            arrayStringValue: arrayValue,
        };
        this.showToast(data);
    }

    showDetail(data) {
        this.isDetail = true;
    }

    showConfirmOk(value) {
        this.eventManagerService.broadcast({name: 'showDialogConfirm', data: value});
    }

    showToast(value) {
        this.eventManagerService.broadcast({name: 'showToast', data: value});
    }

    stop() {
        const header = this.initHeader();
        const data = {
            messageId: 'stop_room',
            arrayStringValue: [header],
            accept: () => {
                this.stopAction(header);
            }
        };
        this.showConfirmOk(data);
    }

    stopAction(header) {
        const data = {messageId: 'stop_success', arrayStringValue: [header]};
        this.showToast(data);
        this.back();
    }

    updateRoomEventAction(data) {
        const object = {
            messageId: 'update_room_confirm',
            arrayStringValue: [data.label, data.value],
            accept: () => {
                this.updateRoomAction(data.label);
            }
        };
        this.showConfirmOk(object);
    }

    updateRoomAction(lable) {
        const data = {messageId: 'update_success', arrayStringValue: [lable]};
        this.showToast(data);
    }

    showDialog(data) {
        // this.confirmAction.
    }

}
