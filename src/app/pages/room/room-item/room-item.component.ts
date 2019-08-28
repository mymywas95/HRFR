import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-item',
    templateUrl: './room-item.component.html',
    styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
    items = [];
    @Output() showDetailEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    initData(data) {
        this.items = data;
        this.items = [...this.items];
    }

    showDetail(data) {
        this.showDetailEvent.emit(data);
    }

}
