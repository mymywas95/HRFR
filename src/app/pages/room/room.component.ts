import {Component, OnInit} from '@angular/core';
import {SelectItem} from '../../ui-common/common/selectitem';

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
    isDetail =  false;

    constructor() {
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

    showDetail(data) {
        this.isDetail = true;
    }

}
