import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {path: '', component: HomeComponent},
            {path: '', loadChildren: './pages/home/home.module#HomeModule'},
            {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
            {path: 'room', loadChildren: './pages/room/room.module#RoomModule'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
