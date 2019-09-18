import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectItem} from '../../../ui-common/common/selectitem';

@Component({
    selector: 'was-room-guest',
    templateUrl: './room-guest.component.html',
    styleUrls: ['./room-guest.component.scss']
})
export class RoomGuestComponent implements OnInit {
    guestList: any[];
    guestSelected;
    cols;
    sexs: SelectItem[];
    @Output() createGuestEvent = new EventEmitter();
    @Output() updateGuestEvent = new EventEmitter<any>();
    @Output() deleteGuestEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initGuestData();
        this.sexs = [
            {label: 'Nam', value: null},
            {label: 'Nữ', value: null},
        ];
    }

    createGuest() {
        this.createGuestEvent.emit();
    }

    initGuestData() {
        this.cols = [
            {field: 'name', header: 'Họ và tên'},
            {field: 'sex', header: 'Giới tính'},
            {field: 'birthday', header: 'Ngày sinh'},
            {field: 'phone', header: 'SĐT'},
            {field: 'job', header: 'Nghề nghiệp'},
            {field: 'identityNumber', header: 'CMND'},
            {field: 'identityDate', header: 'Ngày cấp'},
            {field: 'identityProvide', header: 'Nơi cấp'},
            {field: 'note', header: 'Ghi chú'},
        ];
        this.guestList = [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                sex: 'nam',
                birthday: new Date('1995/07/07'),
                phone: '090909090909',
                job: 'sinh viên',
                identityNumber: '123123123',
                identityDate: new Date('2012/07/07'),
                identityProvide: 'Cà màu',
                note: 'đen'
            },
            {
                id: 2,
                name: 'Nguyễn Văn B',
                sex: 'nam',
                birthday: new Date('1995/07/07'),
                phone: '090909090909',
                job: 'sinh viên',
                identityNumber: '123123123',
                identityDate: new Date('2012/07/07'),
                identityProvide: 'Cà màu',
                note: 'đen'
            },
            {
                id: 3,
                name: 'Nguyễn Văn C',
                sex: 'nam',
                birthday: new Date('1995/07/07'),
                phone: '090909090909',
                job: 'sinh viên',
                identityNumber: '123123123',
                identityDate: new Date('2012/07/07'),
                identityProvide: 'Cà màu',
                note: 'đen'
            },

        ];
        this.guestSelected = this.guestList[0];
    }

    onRowSelect(value) {
        this.guestSelected = value.data;
    }


    deleteGuest(value) {
        this.deleteGuestEvent.emit(value);
    }

    onEditComplete(value) {
        const col = this.cols.find(item => item.field === value.field);
        if (col) {
            const data = {
                header: col.header,
                value: value.data[value.field]
            };
            this.updateGuestEvent.emit(data);
        }
    }

}
