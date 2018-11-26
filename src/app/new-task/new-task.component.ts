import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    isLinear = false;

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    priorityOptions = [];

    constructor(private _formBuilder: FormBuilder,
                private tasksService: TasksService) {
    }

    ngOnInit() {
        this.setPriorityOptions();
        this.setForms();
    }

    setForms() {
        this.firstFormGroup = this._formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            priority: ['']
        });

        this.secondFormGroup = this._formBuilder.group({
            dueDate: ['']
        });
    }

    setPriorityOptions() {
        this.priorityOptions = this.tasksService.getPriorityOptions();
    }

    saveTask() {
        const newTask = new Task();

        newTask.title = this.firstFormGroup.controls['title'].value;
        newTask.description = this.firstFormGroup.controls['description'].value;
        newTask.dueDate = this.secondFormGroup.controls['dueDate'].value;
        newTask.priority = this.priorityOptions.find(priority => {
            return priority.value === this.firstFormGroup.controls['priority'].value;
        });
        newTask.created = new Date();

        this.tasksService.createNewTask(newTask);
    }

    isFormValid() {
        return this.firstFormGroup.valid && this.secondFormGroup.valid;
    }
}
