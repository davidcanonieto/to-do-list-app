import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    isLinear = false;

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    afs: AngularFirestoreCollection<any>;

    priorityOptions = [
        { value: 'critical', label: 'Critical', icon: 'flash_on' },
        { value: 'important', label: 'Important', icon: 'directions_bike' },
        { value: 'normal', label: 'Normal', icon: 'directions_run' },
        { value: 'low', label: 'Low', icon: 'directions_walk' }
    ];

    constructor(private _formBuilder: FormBuilder,
                private db: AngularFirestore) {
        this.afs = db.collection('tasks');
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            priority: ['']
        });

        this.secondFormGroup = this._formBuilder.group({
            dueDate: ['']
        });
    }

    saveTask() {
        const newTask = new Task();
        newTask.title = this.firstFormGroup.controls['title'].value;
        newTask.description = this.firstFormGroup.controls['description'].value;
        newTask.dueDate = this.secondFormGroup.controls['dueDate'].value;
        newTask.priority = this.firstFormGroup.controls['priority'].value;
        this.afs.add(JSON.parse(JSON.stringify(newTask)));
    }

    isFormValid() {
        return this.firstFormGroup.valid && this.secondFormGroup.valid;
    }
}
