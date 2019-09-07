import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-item',
    templateUrl: './room-item.component.html',
    styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
    items = [];
    display = true;
    block;
    @Output() showDetailEvent = new EventEmitter<any>();
    @Output() updateBlockEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    initData(data) {
        this.items = data;
        this.items = [...this.items];
        this.initBlockData();
    }

    showDetail(data) {
        this.showDetailEvent.emit(data);
    }

    initBlockData() {
        this.block = {
            name: 'Dãy trọ vườn lài',
            address: '357/7/3 Quốc Lộ 13, Phường Hiệp Bình Phước, Quận Thủ Đức, Thành phố Hồ Chí Minh',
            landNumber: '23D',
            mapNumber: '9',
            acreage: 100
        };
    }

    update(field, label, value) {
        this.updateBlockEvent.emit({
            field,
            label,
            value
        });
    }

}
