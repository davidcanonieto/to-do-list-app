import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';
import * as moment from 'moment';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    @Input()
    task: Task;

    dueDate: any;

    constructor() { }

    ngOnInit() {
        this.dueDate = moment(this.task.dueDate).fromNow();
    }

}
