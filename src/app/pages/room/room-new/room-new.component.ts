import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectItem} from '../../../ui-common/common/selectitem';

@Component({
    selector: 'was-room-new',
    templateUrl: './room-new.component.html',
    styleUrls: ['./room-new.component.scss']
})
export class RoomNewComponent implements OnInit {
    display = false;
    profileForm;
    roomType: SelectItem[];
    roomArea: SelectItem[];
    @Output() createRoomEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    create() {
        this.createRoomEvent.emit(this.profileForm.value);
    }

    initDefaultForm() {
        this.roomType = [
            {label: 'Phòng trọ', value: 'room'},
            {label: 'Khu trọ', value: 'area'},
            {label: 'Nhà cho thuê', value: 'house'},
        ];
        this.roomArea = [
            {label: 'Khu Vườn Lài', value: '1'},
            {label: 'Khu FPT', value: '2'}
        ];
        this.profileForm = new FormGroup({
            roomType: new FormControl(this.roomType[0].value),
            roomArea: new FormControl(this.roomArea[0].value),
            name: new FormControl(''),
            address: new FormControl(''),
            roomPrice: new FormControl(''),
            waterPrice: new FormControl(''),
            electricPrice: new FormControl(''),
            trashPrice: new FormControl(''),
            carPrice: new FormControl(''),
            waterNumber: new FormControl(0),
            electricNumber: new FormControl(0),
        });
    }

}
