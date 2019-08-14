import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {RoomComponent} from './room.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: RoomComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoomRoutingModule { }
