import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'was-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    calendarList: any[];
    cols: any[];

    constructor() {
    }

    ngOnInit() {
      this.initData();
    }

    deleteCalendar(calendar) {

    }

    initData() {
        this.cols = [
            {header: 'Tên', field: 'name'},
            {header: 'Thời Gian', field: 'time'},
            {header: 'Trạng thái', field: 'status'},
        ];
        this.calendarList = [
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'},
            {id: 1, name: 'thu tiền phòng', time: '18:00 11/11/2019', status: 'chưa gửi'}
        ];
    }

}
