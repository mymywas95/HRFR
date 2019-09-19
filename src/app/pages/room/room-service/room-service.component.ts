import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
    selector: 'was-room-service',
    templateUrl: './room-service.component.html',
    styleUrls: ['./room-service.component.scss']
})
export class RoomServiceComponent implements OnInit {

    cars: any[];
    serviceSelected;
    room;
    display = false;
    cols: any[];
    serviceCols: any[];
    services: any[];
    statusList: any[];
    @Output() payEvent = new EventEmitter<any>();
    @Output() deleteGuestEvent = new EventEmitter<any>();
    @Output() createGuestEvent = new EventEmitter();
    @Output() updateRoomEvent = new EventEmitter<any>();
    @Output() updateGuestEvent = new EventEmitter<any>();

    constructor(private datePipe: DatePipe, currencyPipe: CurrencyPipe) {
    }

    ngOnInit() {
        this.initRoomData();
        this.initServiceData();
        this.statusList = [
            {
                label: 'Dịch vụ đang cung cấp', value: null
            },
            {
                label: 'Dịch vụ ngưng cung cấp', value: null
            }
        ];
    }

    createGuest() {
        this.createGuestEvent.emit();
    }

    initRoomData() {
        this.room = {
            acreage: 20,
            name: 'Phòng số 1',
            dateCollection: '10/09/2019',
            totalPrice: '1,000'
        };
    }

    initServiceData() {
        this.serviceCols = [
            {header: 'Loại hình dịch vụ'},
            {header: 'Ghi chú'},
            {header: 'Đơn vị'},
            {header: 'Thời gian hiệu lực'},
            {header: 'Số lượng'},
            {header: 'Đơn giá'},
            {header: 'Tổng giá'},
        ];
        this.services = [
            {
                id: 1,
                label: 'Tiền điện',
                duration: '07/08/2019 - 07/08/2020',
                unit: '.000VNĐ',
                key: 'electricPrice',
                value: 1000,
                note: '',
                amount: 1
            },
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

    update(field, label, value) {
        this.updateRoomEvent.emit({
            field,
            label,
            value
        });
    }

    calculateTotalPrice(rowdata) {
        if (rowdata.amount && rowdata.value) {
            return rowdata.amount * rowdata.value;
        } else {
            return 0;
        }
    }

    onRowSelect(value) {

    }

}
