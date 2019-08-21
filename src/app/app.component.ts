import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SidebarComponent} from './core/master-page/sidebar/sidebar.component';

@Component({
    selector: 'was-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menuActive: boolean;
    @ViewChild(SidebarComponent, {static: false})
    private sidebar: SidebarComponent;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.translate.setDefaultLang('vi');
        this.translate.use('vi');
    }

    menuActiveAction(value) {
        this.menuActive = value;
        this.sidebar.menuActive = value;
    }

}
