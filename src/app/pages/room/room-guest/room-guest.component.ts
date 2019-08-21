import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'was-room-guest',
  templateUrl: './room-guest.component.html',
  styleUrls: ['./room-guest.component.scss']
})
export class RoomGuestComponent implements OnInit {
  display = false;
  profileForm;
  @Output() createGuestEvent = new EventEmitter<any>();
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.initDefaultForm();
  }

  create() {
    this.createGuestEvent.emit(this.profileForm.value);
  }

  initDefaultForm() {
    const defaultDate = new Date();
    defaultDate.setFullYear(defaultDate.getFullYear() - 18);
    this.profileForm = new FormGroup({
      name: new FormControl(),
      birthday: new FormControl(defaultDate),
      identityNumber: new FormControl(),
      phone: new FormControl(),
    });
  }

}
