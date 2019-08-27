import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectItem} from '../../../ui-common/common/selectitem';

@Component({
    selector: 'was-account-new',
    templateUrl: './account-new.component.html',
    styleUrls: ['./account-new.component.scss']
})
export class AccountNewComponent implements OnInit {
    profileForm;
    display = false;
    roles: SelectItem[];
    @Output() createAccountEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    create() {
        this.createAccountEvent.emit(this.profileForm.value);
    }

    initDefaultForm() {
        this.roles = [
            {label: 'Quản trị', value: 'admin'},
            {label: 'Quản lý', value: 'manager'}
        ];
        this.profileForm = new FormGroup({
            name: new FormControl(''),
            username: new FormControl(''),
            password: new FormControl(''),
            role: new FormControl(this.roles[0].value),
        });
    }

}
