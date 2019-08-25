import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectItem} from '../../../ui-common/common/selectitem';
import {Dialog} from '../../../ui-common/dialog/dialog';

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
    @ViewChild(Dialog, {static: false})
    private dialog: Dialog;

    constructor() {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    changeRoomtype() {
        if (this.profileForm.value.roomType === 'area') {
            this.profileForm.controls.roomPrice.setValue(0);
            this.profileForm.controls.waterPrice.setValue(0);
            this.profileForm.controls.electricPrice.setValue(0);
            this.profileForm.controls.trashPrice.setValue(0);
            this.profileForm.controls.carPrice.setValue(0);
            this.profileForm.controls.waterNumber.setValue(0);
            this.profileForm.controls.electricNumber.setValue(0);
        }
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
            roomPrice: new FormControl(0),
            waterPrice: new FormControl(0),
            electricPrice: new FormControl(0),
            trashPrice: new FormControl(0),
            carPrice: new FormControl(0),
            waterNumber: new FormControl(0),
            electricNumber: new FormControl(0),
        });
    }
}
