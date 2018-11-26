import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import * as moment from 'moment';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    private DATE_FORMAT = 'MMM D, YY';

    @Input()
    task: Task;

    @Output()
    deleteTaskEmitter: EventEmitter<any> = new EventEmitter<any>();

    dueDate: any;
    timeLeft: any;
    priority: any;

    constructor() { }

    ngOnInit() {
        this.timeLeft = moment(this.task.dueDate).fromNow();
        this.dueDate = moment(this.task.dueDate).format(this.DATE_FORMAT);
    }

    deleteTask() {
        this.deleteTaskEmitter.emit();
    }

}
