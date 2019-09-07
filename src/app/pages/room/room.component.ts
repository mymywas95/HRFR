import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectItem} from '../../ui-common/common/selectitem';
import {ConfirmDialogCustomComponent} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.component';
import {RoomNewComponent} from './room-new/room-new.component';
import {LanguageHelperService} from '../../shared/services/language-helper.service';
import {Message} from '../../ui-common/common/message';
import {ConfirmDialogCustomService} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.service';
import {CalendarNewComponent} from '../../shared/modules/calendar-new/calendar-new.component';
import {EventManagerService} from '../../shared/services/event-manager.service';
import {RoomItemComponent} from './room-item/room-item.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RoomService} from './services/room.service';
import {RoomGuestNewComponent} from './room-guest-new/room-guest-new.component';
import {RoomDeviceNewComponent} from './room-device-new/room-device-new.component';

@Component({
    selector: 'was-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, AfterViewInit {
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

    @ViewChild(RoomGuestNewComponent, {static: false})
    private roomGuest: RoomGuestNewComponent;

    @ViewChild(CalendarNewComponent, {static: false})
    private calendarNew: CalendarNewComponent;

    @ViewChild(RoomItemComponent, {static: false})
    private roomItemComponent: RoomItemComponent;

    @ViewChild(RoomDetailComponent, {static: false})
    private roomDetailComponent: RoomDetailComponent;

    @ViewChild(RoomDeviceNewComponent, {static: false})
    private roomDeviceNewComponent: RoomDeviceNewComponent;

    constructor(private languageHelperService: LanguageHelperService,
                private confirmDialogCustomService: ConfirmDialogCustomService,
                private eventManagerService: EventManagerService,
                private roomService: RoomService) {
    }

    ngOnInit() {
        this.roomTypeList = [
            {label: 'Khu dãy trọ', value: 'room'},
            {label: 'Khu nhà cho Thuê', value: 'house'},
            {label: 'Khu Tòa nhà', value: 'building'},
        ];
        this.roomTypeSelected = this.roomTypeList[0].value;
        this.initRoomList(this.roomTypeSelected);
    }

    ngAfterViewInit() {
        this.changeDetail(this.roomTypeList[0].value);
    }

    back() {
        this.showDetail(false);
    }

    changeDetail(option) {
        this.showDetail(false);
        const type = this.roomTypeSelected;
        const room = this.roomSelected;
        const listRoom = [];
        if (option === 'type') {
            option = type;
            this.initRoomList(type);
        }
        switch (option) {
            case 'room': {
                for (let i = 0; i <= 10; i++) {
                    listRoom.push({
                        name: 'Phòng số ' + (i + 1) + ' ' + room,
                        price: 200,
                        guestNumber: 5,
                        status: 1
                    });
                }
                break;
            }
            case 'house': {
                for (let i = 0; i <= 10; i++) {
                    listRoom.push({
                        name: 'Nhà số ' + (i + 1) + ' ' + room,
                        price: 200,
                        guestNumber: 5,
                        status: 1
                    });
                }
                break;
            }
            case 'building': {
                for (let i = 0; i <= 10; i++) {
                    listRoom.push({
                        name: 'Tòa số ' + (i + 1) + ' ' + room,
                        price: 200,
                        guestNumber: 5,
                        status: 1
                    });
                }
                break;
            }
        }
        this.roomItemComponent.initData(listRoom);
    }

    create() {
        this.roomNew.initDefaultForm();
        this.roomNew.display = true;
    }

    createCalendar() {
        this.calendarNew.display = true;
    }

    createDeviceEmit() {
        this.roomDeviceNewComponent.display = true;
        this.roomDeviceNewComponent.initDefaultForm();
    }

    createDeviceEventEmit(value) {
        this.roomDeviceNewComponent.display = false;
        const name = value.name;
        const data = {
            messageId: 'create_success',
            arrayStringValue: [name]
        };
        this.showToast(data);
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
            const arrString = [name, name];
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
            arrayStringValue: arrayString,
            accept: () => {
                this.createGuestEmitAction();
            },
            reject: () => {
                this.showToast({
                    messageId: 'create_process_done'
                });
            }
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

    deleteDeviceEmit(value) {
        const arrString = [value.name];
        const data = {
            messageId: 'delete_confirm',
            arrayStringValue: arrString,
            accept: () => {
                this.deleteDeviceAction(arrString);
            }
        };
        this.showConfirmOk(data);
    }

    deleteDeviceAction(arrString) {
        const data = {
            messageId: 'delete_success',
            arrayStringValue: arrString
        };
        this.showToast(data);
    }

    goDetail(value) {
        this.roomItemComponent.display = value;
        this.roomDetailComponent.display = !value;
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

    initRoomList(type) {
        switch (type) {
            case 'room' : {
                this.roomList = [
                    {label: 'Dãy trọ vườn lài', value: 'lai'},
                    {label: 'Dãy trọ FPT', value: 'FPT'}
                ];
                break;
            }
            case 'house' : {
                this.roomList = [
                    {label: 'Quận 12', value: 'Q12'},
                    {label: 'Quận 9', value: 'Q9'}
                ];
                break;
            }
            case 'building' : {
                this.roomList = [
                    {label: 'Tòa nhà A', value: 'BuildingA'},
                    {label: 'Tòa nhà B', value: 'BuildingB'}
                ];
                break;
            }
        }


        this.roomSelected = this.roomList[0].value;
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
        this.isDetail = data;
        // this.roomItemComponent.display = !data;
        // this.roomDetailComponent.display = data;
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

    updateGuestEventAction(data) {
        const object = {
            messageId: 'update_confirm',
            arrayStringValue: [data.header, data.value],
            accept: () => {
                this.updateGuestAction(data.header);
            }
        };
        this.showConfirmOk(object);
    }

    updateGuestAction(lable) {
        const data = {messageId: 'update_success', arrayStringValue: [lable]};
        this.showToast(data);
    }

    updateRoomEventAction(data) {
        const object = {
            messageId: 'update_confirm',
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
