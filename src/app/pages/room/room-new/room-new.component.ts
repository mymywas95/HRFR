import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'was-room-new',
    templateUrl: './room-new.component.html',
    styleUrls: ['./room-new.component.scss']
})
export class RoomNewComponent implements OnInit {
    display = false;
    profileForm;
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
        this.profileForm = new FormGroup({
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
