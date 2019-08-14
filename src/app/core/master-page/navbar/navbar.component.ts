import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'was-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    menuActive: boolean;

    activeMenuId: string;

    darkDemoStyle: HTMLStyleElement;

    routes: Array<string> = [];

    filteredRoutes: Array<string> = [];

    searchText: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        const routes = this.router.config;
        for (const route of routes) {
            if (route.path && route.path !== 'datagrid' && route.path !== 'datalist'
                && route.path !== 'datascroller' && route.path !== 'growl') {
                this.routes.push(route.path.charAt(0).toUpperCase() + route.path.substr(1));
            }
        }
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }

}
