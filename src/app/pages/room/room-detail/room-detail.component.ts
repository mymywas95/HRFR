import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'was-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
    cars: any[];

    cols: any[];
    @Output() payEvent = new EventEmitter<any>();
    @Output() deleteGuestEvent = new EventEmitter<any>();
    constructor() {
    }

    ngOnInit() {
        this.cars = [
            {brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff'},
            {brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345'},
            {brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr'},
            {brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh'},
            {brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34'},
            {brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj'},
            {brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr'},
            {brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34'},
            {brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5'},
            {brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s'}
        ];
        this.cols = [
            {field: 'year', header: 'Họ và tên'},
            {field: 'brand', header: 'Ngày sinh'},
            {field: 'color', header: 'SĐT'},
            {field: 'color', header: 'CMND'}
        ];
    }

    deleteGuest(value) {
       this.deleteGuestEvent.emit(value);
    }

    pay() {
        this.payEvent.emit(true);
    }

}
