import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'was-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
  @Output() showDetailEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  showDetail(data) {
    this.showDetailEvent.emit(data);
  }

}
