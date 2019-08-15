import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomComponent} from './room.component';
import {RoomRoutingModule} from './room-routing.module';
import {PanelModule} from '../../ui-common/panel/panel';
import {TabViewModule} from '../../ui-common/tabview/tabview';
import { RoomItemComponent } from './room-item/room-item.component';
import {FieldsetModule} from '../../ui-common/fieldset/fieldset';
import {ButtonModule} from '../../ui-common/button/button';
import {DropdownModule} from '../../ui-common/dropdown/dropdown';
import {FormsModule} from '@angular/forms';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';
import {TableModule} from '../../ui-common/table/table';
import {CalendarModule} from '../../ui-common/calendar/calendar';
import {ConfirmDialogCustomModule} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';

@NgModule({
    declarations: [RoomComponent, RoomItemComponent, RoomDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        RoomRoutingModule,
        TabViewModule,
        PanelModule,
        FieldsetModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        TableModule,
        CalendarModule,
        ConfirmDialogCustomModule
    ]
})
export class RoomModule {
}
