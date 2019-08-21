import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
    selector: 'was-home-tracking',
    templateUrl: './home-tracking.component.html',
    styleUrls: ['./home-tracking.component.scss']
})
export class HomeTrackingComponent implements OnInit {
    data: any;
    events: any[];

    options: any;

    header: any;

    constructor() {
    }

    ngOnInit() {
        this.initChart();
        this.initCalendar();
    }

    initChart() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Thu',
                    data: [65, 59, 80, 81, 56, 55, 90],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'chi phí',
                    data: [28, 48, 40, 19, 86, 27, 50],
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'lợi nhuận',
                    data: [37, 11, 40, 62, 30, 28, 50],
                    fill: false,
                    borderColor: '#FFC107'
                }
            ]
        };
    }

    initCalendar() {
        this.events = [
            {
                id: 1,
                title: 'All Day Event',
                start: '2017-02-01'
            },
            {
                id: 2,
                title: 'Long Event',
                start: '2017-02-07',
                end: '2017-02-10'
            },
            {
                id: 3,
                title: 'Repeating Event',
                start: '2017-02-09T16:00:00'
            },
            {
                id: 4,
                title: 'Repeating Event',
                start: '2017-02-16T16:00:00'
            },
            {
                id: 5,
                title: 'Conference',
                start: '2017-02-11',
                end: '2017-02-13'
            },
            {
                id: 6,
                title: 'Meeting',
                start: '2017-02-12T10:30:00',
                end: '2017-02-12T12:30:00'
            },
            {
                id: 7,
                title: 'Lunch',
                start: '2017-02-12T12:00:00'
            },
            {
                id: 8,
                title: 'Meeting',
                start: '2017-02-12T14:30:00'
            },
            {
                id: 9,
                title: 'Happy Hour',
                start: '2017-02-12T17:30:00'
            },
            {
                id: 10,
                title: 'Dinner',
                start: '2017-02-12T20:00:00'
            },
            {
                id: 11,
                title: 'Birthday Party',
                start: '2017-02-13T07:00:00'
            },
            {
                id: 12,
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-02-28'
            }
        ];

        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
        };
    }

}
