import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'was-room-guest',
    templateUrl: './room-guest.component.html',
    styleUrls: ['./room-guest.component.scss']
})
export class RoomGuestComponent implements OnInit {
    display = false;
    profileForm;
    currentArrayString;
    @Output() createGuestEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    create() {
      const data = {
        form: this.profileForm.value,
        currentArrayString: this.currentArrayString
      };
      this.createGuestEvent.emit(data);
    }

    initDefaultForm() {
        const defaultDate = new Date();
        defaultDate.setFullYear(defaultDate.getFullYear() - 18);
        this.profileForm = new FormGroup({
            name: new FormControl(),
            birthday: new FormControl(defaultDate),
            identityNumber: new FormControl(),
            phone: new FormControl(),
        });
    }

}
