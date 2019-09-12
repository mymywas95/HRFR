import {Component, OnInit} from '@angular/core';
import {TreeNode} from '../../../ui-common/common/treenode';
import {Router} from '@angular/router';
import {EventManagerService} from '../../../shared/services/event-manager.service';

@Component({
    selector: 'was-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    menuActive: boolean;
    filesTree2: TreeNode[];
    selectedFile: TreeNode;
    showListRoom = false;

    constructor(private router: Router, private eventManagerService: EventManagerService) {
    }

    ngOnInit() {
        this.filesTree2 = [
            {
                label: 'Khu dãy trọ', children: [{
                    label: 'Dãy trọ quận 9', children: [
                        {
                            label: 'tầng triệt', data: 'Expenses Document',
                            children: [
                                {
                                    label: 'Phòng số 1', data: 'Expenses Document',
                                }
                            ]
                        }]
                }
                ]
            },
            {
                label: 'Khu nhà', children: [{
                    label: 'Nhà vườn lài', children: [
                        {
                            label: 'Tầng 1', data: 'Expenses Document',
                            children: [
                                {
                                    label: 'Phòng số 1', data: 'Expenses Document',
                                }
                            ]
                        },
                        {
                            label: 'Tầng 2', data: 'Expenses Document',
                            children: [
                                {
                                    label: 'Phòng số 1', data: 'Expenses Document',
                                }
                            ]
                        }]
                }
                ]
            }
        ];
    }

    showRoom() {
        this.showListRoom = !this.showListRoom;
        // this.router.navigate(['room']);
    }

    nodeSelect(event) {
        this.eventManagerService.broadcast({
            name: 'sendRoomSelected', data: event
        })
        this.router.navigate(['room']);
    }
}
