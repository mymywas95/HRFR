import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'was-room-payment-history',
    templateUrl: './room-payment-history.component.html',
    styleUrls: ['./room-payment-history.component.scss']
})
export class RoomPaymentHistoryComponent implements OnInit {

    historyList: any[];
    typeList: any[];
    serviceList: any[];
    monthList: any[];
    statusList: any[];
    typeSelected;
    historySelected;
    serviceSelected;
    monthSelected;
    statusSelected;
    cols;
    display;
    paymentStart;
    paymentEnd;
    images;

    constructor() {
    }

    ngOnInit() {
        this.initData();
        this.paymentStart = new Date();
        this.paymentEnd = new Date();
    }

    initData() {
        this.cols = [
            {field: 'type', header: 'Loại dịch vụ'},
            {field: 'transactionType', header: 'Hình thức giao dịch'},
            {field: 'money', header: 'Số tiền cần thành toán'},
            {field: 'moneyPayment', header: 'Số tiền đã thanh toán'},
            {field: 'transactionDate', header: 'Ngày giao dịch'},
            {field: 'description', header: 'Ghi chú'},
            {field: 'status', header: 'Trạng thái'}
        ];
        this.historyList = [
            {
                id: 1,
                type: 'Tiền phòng',
                transactionType: 'Thanh toán tiền mặt',
                money: '2000000',
                field: '2000000',
                transactionDate: new Date(),
                description: 'thanh toán đủ',
                status: 'Đã hoàn tất'
            }
        ];
        this.historySelected = this.historyList[0];
        this.typeList = [
            {label: 'chuyển khoản', value: null},
            {label: 'Thanh toán trực tiếp', value: null},
        ];
        this.typeSelected = this.typeList[0];
        this.serviceList = [
            {label: 'Tiền thuê nhà', value: null},
            {label: 'Tiền bồi thường', value: null},
        ];
        this.serviceSelected = this.serviceList[0];
        this.monthList = [
            {label: 'Tháng 1', value: null},
            {label: 'Tháng 2', value: null},
        ];
        this.monthSelected = this.monthList[0];
        this.statusList = [
            {label: 'Hoàn tất', value: null},
            {label: 'Bị hoãn', value: null},
        ];
        this.statusSelected = this.monthList[0];

    }

    onEditComplete(value) {
        const col = this.cols.find(item => item.field === value.field);
        if (col) {
            const data = {
                header: col.header,
                value: value.data[value.field]
            };
            // this.updateGuestEvent.emit(data);
        }
    }

    onRowSelect(value) {
        // this.deviceSelected = value.data;
    }

    deleteHistory(rowData) {

    }

}
