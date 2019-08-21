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
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
