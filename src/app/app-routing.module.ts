import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {path: '', component: HomeComponent},
            {path: '', loadChildren: './pages/home/home.module#HomeModule'},
            {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
            {path: 'room', loadChildren: './pages/room/room.module#RoomModule'},
            {path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarModule'},
            {path: 'statistic', loadChildren: './pages/statistic/statistic.module#StatisticModule'},
            {path: 'account', loadChildren: './pages/account/account.module#AccountModule'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
