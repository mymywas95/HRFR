import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../../../ui-common/common/menuitem';

@Component({
    selector: 'was-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    menuActive: boolean;

    routes: Array<string> = [];

    items: MenuItem[];

    @Output() menuActiveEvent = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.items = [
            {label: 'Đăng Xuất', icon: 'fa fa-sign-out'}
        ];
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        this.menuActiveEvent.emit(this.menuActive);
        event.preventDefault();
    }

}
