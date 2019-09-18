import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
    selector: 'was-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
    cars: any[];
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

    constructor(private datePipe: DatePipe, currencyPipe: CurrencyPipe) {
    }

    ngOnInit() {
        this.initRoomData();
        this.initServiceData();
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
            {header: 'Số lượng'},
            {header: 'Đơn giá'},
            {header: 'Tổng giá'},
        ];
        this.services = [
            {id: 1, label: 'Tiền điện', unit: '.000VNĐ', key: 'electricPrice', value: 1000, note: '', amount: 1},
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

    calculateTotalPrice(rowdata) {
        if (rowdata.amount && rowdata.value) {
            return rowdata.amount * rowdata.value;
        } else {
            return 0;
        }
    }

}
