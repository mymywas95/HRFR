import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LanguageHelperService} from '../../services/language-helper.service';
import {ConfirmDialogCustomService} from '../confirm-dialog-custom/confirm-dialog-custom.service';
import {EventManagerService} from '../../services/event-manager.service';

@Component({
    selector: 'was-calendar-new',
    templateUrl: './calendar-new.component.html',
    styleUrls: ['./calendar-new.component.scss']
})
export class CalendarNewComponent implements OnInit {
    display = false;
    profileForm;
    msgs;

    constructor(private languageHelperService: LanguageHelperService,
                private confirmDialogCustomService: ConfirmDialogCustomService,
                private eventManagerService: EventManagerService) {
    }

    ngOnInit() {
        this.initDefaultForm();
    }

    create() {
        this.display = false;
        const data = {
            messageId: 'create_success',
            arrayStringValue: this.profileForm.value.name
        };
        this.showToast(data);
        // this.createCalendarEvent.emit(this.profileForm.value);
    }

    showToast(value) {
       this.eventManagerService.broadcast({name: 'showToast', data: value});
    }

    initDefaultForm() {
        const defaultDate = new Date();
        defaultDate.setFullYear(defaultDate.getFullYear() - 18);
        this.profileForm = new FormGroup({
            name: new FormControl(),
            time: new FormControl(defaultDate),
            content: new FormControl(),
        });
    }

}
