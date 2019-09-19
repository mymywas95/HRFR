import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-device',
    templateUrl: './room-device.component.html',
    styleUrls: ['./room-device.component.scss']
})
export class RoomDeviceComponent implements OnInit {
    deviceList: any[];
    deviceBackList: any[];
    deviceAttackedList: any[];
    deviceSelected;
    deviceBackSelected;
    deviceAttackedSelected;
    cols;
    colsAttached;
    display;
    images;
    @Output() createDeviceEvent = new EventEmitter<any>();
    @Output() updateGuestEvent = new EventEmitter<any>();
    @Output() deleteDeviceEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.initGuestData();
        this.initDeviceImage();
    }

    create() {
        this.createDeviceEvent.emit();
    }

    initGuestData() {
        this.cols = [
            {field: 'name', header: 'Tên'},
            {field: 'image', header: 'Hình ảnh'},
            {field: 'description', header: 'Mô tả'},
            {field: 'quantity', header: 'Số lượng'},
            {field: 'price', header: 'Giá bồi thường'},
            {field: 'date', header: 'Ngày giao'},
            {field: 'status', header: 'Trạng thái'},

        ];
        this.colsAttached = [
            {field: 'name', header: 'Tên'},
            {field: 'image', header: 'Hình ảnh'},
            {field: 'location', header: 'Vị trí gắn'},
            {field: 'description', header: 'Mô tả'},
            {field: 'quantity', header: 'Số lượng'},
            {field: 'attackedDate', header: 'Ngày gắn'},
            {field: 'status', header: 'Trạng thái'},
        ];
        this.deviceAttackedList = [
            {
                id: 1,
                name: 'Máy lạnh',
                image: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg',
                location: 'Tầng 1',
                description: 'màu trắng',
                quantity: 1,
                price: '1,000,000VND',
                attackedDate: '07/07/2018',
                status: 'Đang sử dụng'
            },
            {
                id: 2,
                name: 'Máy lạnh',
                image: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg',
                location: 'Tầng 1',
                description: 'màu trắng',
                quantity: 1,
                price: '1,000,000VND',
                attackedDate: '07/07/2018',
                status: 'Đang sử dụng'
            }
        ]
        this.deviceList = [
            {
                id: 1,
                name: 'Máy lạnh',
                image: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg',
                description: 'màu trắng',
                quantity: 1,
                price: '1,000,000VND',
                date: '07/07/2018',
                status: 'Đang sử dụng',
            },
            {
                id: 2,
                name: 'Máy lạnh',
                image: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg',
                description: 'màu trắng',
                quantity: 1,
                price: '1,000,000VND',
                date: '07/07/2018',
                status: 'Đang sử dụng',
            }
        ];
        this.deviceSelected = this.deviceList[0];
        this.deviceBackList = this.deviceList;
    }

    showImage() {
        this.initDeviceImage();
        this.display = true;
    }

    initDeviceImage() {
        this.images = [];
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria1.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria2.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria3.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria4.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria5.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria6.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria8.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria9.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria10.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria11.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
        });
        this.images.push({
            source: 'http://primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria12.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
        });
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
        this.deviceSelected = value.data;
    }

    deleteDevice(value) {
        this.deleteDeviceEvent.emit(value);
    }

}
