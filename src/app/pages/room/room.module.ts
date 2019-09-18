import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import {RoomComponent} from './room.component';
import {RoomRoutingModule} from './room-routing.module';
import {PanelModule} from '../../ui-common/panel/panel';
import {TabViewModule} from '../../ui-common/tabview/tabview';
import {RoomItemComponent} from './room-item/room-item.component';
import {FieldsetModule} from '../../ui-common/fieldset/fieldset';
import {ButtonModule} from '../../ui-common/button/button';
import {DropdownModule} from '../../ui-common/dropdown/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {InputTextModule} from '../../ui-common/inputtext/inputtext';
import {TableModule} from '../../ui-common/table/table';
import {CalendarModule} from '../../ui-common/calendar/calendar';
import {ConfirmDialogCustomModule} from '../../shared/modules/confirm-dialog-custom/confirm-dialog-custom.module';
import {RoomNewComponent} from './room-new/room-new.component';
import {DialogModule} from '../../ui-common/dialog/dialog';
import {GrowlModule} from '../../ui-common/growl/growl';
import {CalendarNewModule} from '../../shared/modules/calendar-new/calendar-new.module';
import {FocusTrapModule} from '../../ui-common/focustrap/focustrap';
import {RoomDeviceComponent} from './room-device/room-device.component';
import {GalleriaModule} from '../../ui-common/galleria/galleria';
import {RoomDeviceNewComponent} from './room-device-new/room-device-new.component';
import {RoomHistoryComponent} from './room-history/room-history.component';
import {RoomGuestNewComponent} from './room-guest-new/room-guest-new.component';
import { RoomGuestComponent } from './room-guest/room-guest.component';
import {FileUploadModule} from '../../ui-common/fileupload/fileupload';
import {AccordionModule} from '../../ui-common/accordion/accordion';

@NgModule({
    declarations: [
        RoomComponent,
        RoomItemComponent,
        RoomDetailComponent,
        RoomNewComponent,
        RoomGuestNewComponent,
        RoomDeviceComponent,
        RoomDeviceNewComponent,
        RoomHistoryComponent,
        RoomGuestComponent
    ],
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
        ConfirmDialogCustomModule,
        DialogModule,
        ReactiveFormsModule,
        GrowlModule,
        DropdownModule,
        CalendarNewModule,
        FocusTrapModule,
        GalleriaModule,
        FileUploadModule,
        AccordionModule
    ],
    providers: [DatePipe, CurrencyPipe]
})
export class RoomModule {
}
