import {Component, OnInit} from '@angular/core';
import {EventManagerService} from '../../shared/services/event-manager.service';

@Component({
    selector: 'was-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    calendarList: any[];
    calendarSelected;
    cols: any[];

    constructor(private eventManagerService: EventManagerService) {
    }

    ngOnInit() {
        this.initData();
    }

    deleteCalendar(calendar) {
        const obj = {
            messageId: 'delete_confirm',
            arrayStringValue: [calendar.name]
        };
        this.eventManagerService.broadcast({name: 'showDialogConfirm', data: obj});
    }

    initData() {
        this.cols = [
            {header: 'Tên', field: 'name'},
            {header: 'Thời Gian', field: 'time'},
            {header: 'Nội dung', field: 'content'},
            {header: 'Trạng thái', field: 'status'},
        ];
        this.calendarList = [];
        for (let i = 0; i < 100; i++) {
            this.calendarList.push({
                id: i + 1, name: 'thu tiền phòng ' + (i + 1), time: '18:00 11/11/2019',
                content: 'Đến hạn đóng tiền phòng hằng tháng', status: 'chưa gửi'
            });
        }
        this.calendarSelected = this.calendarList[0];
    }

}
