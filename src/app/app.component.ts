import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SidebarComponent} from './core/master-page/sidebar/sidebar.component';
import {EventManagerService} from './shared/services/event-manager.service';
import {LanguageHelperService} from './shared/services/language-helper.service';
import {ConfirmDialogCustomService} from './shared/modules/confirm-dialog-custom/confirm-dialog-custom.service';
import {ConfirmDialogCustomComponent} from './shared/modules/confirm-dialog-custom/confirm-dialog-custom.component';
import {Subscription} from 'rxjs';

@Component({
    selector: 'was-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    menuActive: boolean;
    msgs;
    private showToastSub = new Subscription();
    private showDialogConfirmSub = new Subscription();
    @ViewChild(SidebarComponent, {static: false})
    private sidebar: SidebarComponent;

    @ViewChild(ConfirmDialogCustomComponent, {static: false})
    private confirmAction: ConfirmDialogCustomComponent;

    constructor(private translate: TranslateService,
                private eventManagerService: EventManagerService,
                private languageHelperService: LanguageHelperService,
                private confirmDialogCustomService: ConfirmDialogCustomService) {
    }

    ngOnInit() {
        this.translate.setDefaultLang('vi');
        this.translate.use('vi');
        this.showToastSub = this.eventManagerService.subscribe('showToast', res => {
            this.showToast(res.data);
        });
        this.showDialogConfirmSub = this.eventManagerService.subscribe('showDialogConfirm', res => {
            this.showConfirmOk(res.data);
        });
    }

    ngOnDestroy(): void {
        this.eventManagerService.destroy(this.showToastSub);
        this.eventManagerService.destroy(this.showDialogConfirmSub);
    }

    menuActiveAction(value) {
        this.menuActive = value;
        this.sidebar.menuActive = value;
    }

    showToast(value) {
        const header = this.languageHelperService.getMessageText('message.' + value.messageId + '.title');
        let message = this.languageHelperService.getMessageText('message.' + value.messageId + '.content');
        if (value.arrayStringValue) {
            message = this.confirmDialogCustomService.formatMessageWithData(value.arrayStringValue, message);
        }
        const serverity = value.isSuccess && value.isSuccess === false ? 'error' : 'success';
        this.msgs = [];
        this.msgs.push({severity: serverity, summary: header, detail: message});
    }

    showConfirmOk(value) {
        this.confirmAction.trigger(value);
    }

}
