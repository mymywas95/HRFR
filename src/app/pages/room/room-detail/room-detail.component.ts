import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
    cars: any[];
    guestList: any[];
    guestSelected;
    serviceSelected;
    room;
    display = false;
    cols: any[];
    serviceCols: any[];
    services: any[];
    @Output() payEvent = new EventEmitter<any>();
    @Output() deleteGuestEvent = new EventEmitter<any>();
    @Output() createGuestEvent = new EventEmitter();
    @Output() updateRoomEvent = new EventEmitter<any>();
    @Output() updateGuestEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initGuestData();
        this.initRoomData();
        this.initServiceData();
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
            {field: 'date', header: 'Ngày cấp'},
            {field: 'household', header: 'Hộ khẩu'},
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
                date: new Date('2012/07/07'),
                household: 'Cà màu'
            },
            {
                id: 2,
                name: 'Nguyễn Văn B',
                sex: 'nam',
                birthday: new Date('1995/07/07'),
                phone: '090909090909',
                job: 'sinh viên',
                identityNumber: '123123123',
                date: new Date('2012/07/07'),
                household: 'Cà màu'
            },
            {
                id: 3,
                name: 'Nguyễn Văn C',
                sex: 'nam',
                birthday: new Date('1995/07/07'),
                phone: '090909090909',
                job: 'sinh viên',
                identityNumber: '123123123',
                date: new Date('2012/07/07'),
                household: 'Cà màu'
            },

        ];
        this.guestSelected = this.guestList[0];
    }

    initRoomData() {
        this.room = {
            acreage: 20,
            name: 'Phòng số 1'
        };
    }

    initServiceData() {
        this.serviceCols = [
            {header: 'Loại hình dịch vụ'},
            {header: 'Giá cả'},
            {header: 'Đơn vị'}
        ];
        this.services = [
            {id: 1, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
            {id: 2, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
            {id: 3, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
            {id: 4, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
            {id: 5, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
            {id: 6, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000},
        ];
        this.serviceSelected = this.services[0];
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

    onRowSelect(value) {
        this.guestSelected = value.data;
    }

    pay() {
        this.payEvent.emit(true);
    }

    update(field, label, value) {
        this.updateRoomEvent.emit({
            field,
            label,
            value
        });
    }

}
