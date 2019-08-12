import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {path: '', component: HomeComponent},
            {path: '', loadChildren: './pages/home/home.module#HomeModule'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
