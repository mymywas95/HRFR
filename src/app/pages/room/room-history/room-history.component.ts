import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'was-room-history',
    templateUrl: './room-history.component.html',
    styleUrls: ['./room-history.component.scss']
})
export class RoomHistoryComponent implements OnInit {
    historyList: any[];
    historySelected;
    cols;
    display;
    images;

    constructor() {
    }

    ngOnInit() {
        this.initData();
    }

    initData() {
        this.cols = [
            {field: 'type', header: 'Loại giao dịch'},
            {field: 'money', header: 'Số tiền'},
            {field: 'transactionType', header: 'Hình thức giao dịch'},
            {field: 'transactionDate', header: 'Ngày giao dịch'},
            {field: 'descriptxion', header: 'Ghi chú'}
        ];
        this.historyList = [
            {
                id: 1,
                type: 'Tiền phòng',
                money: '2000000',
                transactionType: 'chuyển khoản',
                transactionDate: new Date(),
                description: 'thiếu 2 triệu'
            }
        ];
        this.historySelected = this.historyList[0];
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
