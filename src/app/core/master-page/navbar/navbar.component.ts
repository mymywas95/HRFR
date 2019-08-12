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

    changeTheme(event: Event, theme: string, dark: boolean) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        themeLink.href = 'assets/components/themes/' + theme + '/theme.css';

        if (dark) {
            if (!this.darkDemoStyle) {
                this.darkDemoStyle = document.createElement('style');
                this.darkDemoStyle.type = 'text/css';
                this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f; color: #dedede} ' +
                    '.implementation > h3, .implementation > h4{ color: #dedede}';
                document.body.appendChild(this.darkDemoStyle);
            }
        } else if (this.darkDemoStyle) {
            document.body.removeChild(this.darkDemoStyle);
            this.darkDemoStyle = null;
        }

        event.preventDefault();
    }

    selectRoute(routeName) {
        this.router.navigate(['/' + routeName.toLowerCase()]);
        this.filteredRoutes = [];
        this.searchText = '';
    }

    filterRoutes(event) {
        const query = event.query;
        this.filteredRoutes = this.routes.filter(route => {
            return route.toLowerCase().includes(query.toLowerCase());
        });
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }

}
