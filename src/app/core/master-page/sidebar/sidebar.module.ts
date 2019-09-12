import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {TreeModule} from '../../../ui-common/tree/tree';

@NgModule({
    declarations: [SidebarComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        TreeModule
    ],
    exports: [SidebarComponent]
})
export class SidebarModule {
}
