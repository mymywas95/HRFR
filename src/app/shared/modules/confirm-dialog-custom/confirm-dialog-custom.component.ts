import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {LanguageHelperService} from '../../services/language-helper.service';

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

    @Input()
    private set messageId(value: string) {
        if (value) {
            this.setDataforModel(value);
        }
    }

    @Input()
    private set arrayStringValue(value: string[]) {
        if (value) {
            this.formatMessageWithData(value);
        }
    }

    @Input()
    private set event(value) {
        if (value) {
            this.accept = () => {
                this.display = false;
                return value();
            };
        }
    }

    @Input()
    private toggle(value: boolean) {
        if (typeof (value) !== 'undefined') {
            this.display = value;
        }
    }

    constructor(private languageHelperService: LanguageHelperService) {
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

    setDataforModel(messageId) {
        this.header = this.languageHelperService.getMessageText('message.' + messageId + '.title');
        this.message = this.languageHelperService.getMessageText('message.' + messageId + '.content');
        this.acceptLabel = this.languageHelperService.getMessageText('message.' + messageId + '.acceptLabel');
        this.rejectLabel = this.languageHelperService.getMessageText('message.' + messageId + '.rejectLabel');
        this.accept = null;
    }

    formatMessageWithData(value) {
        if (value !== null && value !== undefined && typeof (value) !== 'string') {
            value.forEach(i => {
                this.message = this.message.replace('{' + value.indexOf(i) + '}', i);
            });
        } else {
            this.message = this.message.replace('{0}', value);
        }
    }

}
