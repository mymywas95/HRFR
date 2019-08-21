import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
    cars: any[];
    guestList: any[];
    room;

    cols: any[];
    @Output() payEvent = new EventEmitter<any>();
    @Output() deleteGuestEvent = new EventEmitter<any>();
    @Output() createGuestEvent = new EventEmitter();
    @Output() updateRoomEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initGuestData();
        this.initRoomData();
    }

    createGuest() {
        this.createGuestEvent.emit();
    }

    initGuestData() {
        this.cols = [
            {field: 'name', header: 'Họ và tên'},
            {field: 'birthday', header: 'Ngày sinh'},
            {field: 'phone', header: 'SĐT'},
            {field: 'identityNumber', header: 'CMND'}
        ];
        this.guestList = [
            {id: 1, name: 'Nguyễn Văn A', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
            {id: 2, name: 'Nguyễn Văn B', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
            {id: 3, name: 'Nguyễn Văn C', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
            {id: 4, name: 'Nguyễn Văn D', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
            {id: 5, name: 'Nguyễn Văn E', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
            {id: 6, name: 'Nguyễn Văn F', birthday: '01/01/1995', phone: '090909090909', identityNumber: '123123123'},
        ];
    }

    initRoomData() {
        this.room = {
            roomPrice: 0,
            waterPrice: 0,
            electricPrice: 0,
            trashPrice: 0,
            carPrice: 0,
            waterNumber: 0,
            waterOldNumber: 0,
            electricNumber: 0,
            electricOldNumber: 0
        };
    }

    deleteGuest(value) {
        this.deleteGuestEvent.emit(value);
    }

    pay() {
        this.payEvent.emit(true);
    }

    update(field, label, value) {
        this.updateRoomEvent.emit({
            field,
            label,
            value
        });
    }

}
