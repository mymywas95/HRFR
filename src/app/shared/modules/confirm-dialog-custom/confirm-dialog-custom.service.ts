import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogCustomService {

  constructor() { }

  formatMessageWithData(value, message) {
    if (value !== null && value !== undefined && typeof (value) !== 'string') {
      value.forEach(i => {
        message = message.replace('{' + value.indexOf(i) + '}', i);
      });
    } else {
      message = message.replace('{0}', value);
    }
    return message;
  }
}
