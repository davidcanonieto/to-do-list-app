import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { TasksService } from '../services/tasks.service';
import { TaskWithId } from '../models/taskWithId.model';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    private DATE_FORMAT = 'MMM D, YY';

    @Input()
    task: TaskWithId;

    dueDate: any;
    timeLeft: any;
    priority: any;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.timeLeft = moment(this.task.dueDate).fromNow();
        this.dueDate = moment(this.task.dueDate).format(this.DATE_FORMAT);
    }

    deleteTask() {
        this.tasksService.deleteTask(this.task.id);
    }

}
