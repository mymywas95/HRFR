import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {LanguageHelperService} from '../../services/language-helper.service';
import {ConfirmDialogCustomService} from './confirm-dialog-custom.service';

@Component({
    selector: 'was-confirm-dialog-custom',
    templateUrl: './confirm-dialog-custom.component.html',
    styleUrls: ['./confirm-dialog-custom.component.scss']
})
export class ConfirmDialogCustomComponent implements OnInit, OnChanges {
    display = false;
    public header: string;
    public message: string;
    public acceptLabel: string;
    public rejectLabel: string;
    public accept: any;
    public reject: any;

    constructor(private languageHelperService: LanguageHelperService, private confirmDialogCustomService: ConfirmDialogCustomService) {
    }

    @Input()
    private set messageId(value: string) {
        if (value) {
            this.setDataforModel(value);
        }
    }

    @Input()
    private set arrayStringValue(value: string[]) {
        if (value) {
            this.message = this.confirmDialogCustomService.formatMessageWithData(value, this.message);
        }
    }

    @Input()
    private set event(value) {
        this.setEvent(value);
    }

    @Input()
    private set eventReject(value) {
        this.setEventReject(value);
    }

    ngOnChanges() {
    }

    ngOnInit() {
    }

    closeDialog() {
        this.display = false;
    }

    openDialog() {
        this.display = true;
    }



    acceptAction() {
        if (this.accept) {
            this.accept();
        } else {
            this.toggle(false);
        }
    }

    rejectAction() {
        if (this.reject) {
            this.reject();
        } else {
            this.toggle(false);
        }
    }

    trigger(value) {
        if (value.accept) {
            this.setEvent(value.accept);
        }
        if (value.reject) {
            this.setEventReject(value.reject);
        }
        if (value.messageId) {
            this.setDataforModel(value.messageId);
            if (value.arrayStringValue) {
                this.message = this.confirmDialogCustomService.formatMessageWithData(value.arrayStringValue, this.message);
            }
        }
        this.toggleDialog(true);
    }


    @Input()
    private toggle(value: boolean) {
        if (typeof (value) !== 'undefined') {
            this.display = value;
        }
    }

    // Private Action

    private formatMessageWithData(value) {
        if (value !== null && value !== undefined && typeof (value) !== 'string') {
            value.forEach(i => {
                this.message = this.message.replace('{' + value.indexOf(i) + '}', i);
            });
        } else {
            this.message = this.message.replace('{0}', value);
        }
    }

    private setDataforModel(messageId) {
        this.header = this.languageHelperService.getMessageText('message.' + messageId + '.title');
        this.message = this.languageHelperService.getMessageText('message.' + messageId + '.content');
        this.acceptLabel = this.languageHelperService.getMessageText('message.' + messageId + '.acceptLabel');
        this.rejectLabel = this.languageHelperService.getMessageText('message.' + messageId + '.rejectLabel');
    }

    private setEvent(value) {
        if (value) {
            this.accept = () => {
                this.display = false;
                return value();
            };
        }
    }

    private setEventReject(value) {
        if (value) {
            this.reject = () => {
                this.display = false;
                return value();
            };
        }
    }

    private toggleDialog(value) {
        this.display = value;
    }
}
