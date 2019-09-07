import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Dialog} from '../../../ui-common/dialog/dialog';

@Component({
    selector: 'was-room-device-new',
    templateUrl: './room-device-new.component.html',
    styleUrls: ['./room-device-new.component.scss']
})
export class RoomDeviceNewComponent implements OnInit {
    display = false;
    deviceForm;
    uploadedFiles: any[] = [];
    @Output() createDeviceEvent = new EventEmitter<any>();

    @ViewChild('dialog', {static: false}) dialogElement: Dialog;

    constructor() {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    create() {
        this.createDeviceEvent.emit(this.deviceForm.value);
    }

    initDefaultForm() {
        this.deviceForm = new FormGroup({
            name: new FormControl(),
            description: new FormControl()
        });
        this.uploadedFiles = [];
        this.uploadedFiles = [...this.uploadedFiles];
    }

    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onSelect(event) {
        setTimeout( () => {
            this.dialogElement.positionOverlay();
        }, 10);
    }

}
