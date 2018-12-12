import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable()
export class TasksService {

    private taskCollection: AngularFirestoreCollection<Task>;

    private statusOptions = [
        { value: 'pending', icon: 'panorama_fish_eye' },
        { value: 'finished', icon: 'done' }
    ];

    private priorityOptions = [
        { value: 'critical', label: 'Critical', icon: 'flash_on' },
        { value: 'important', label: 'Important', icon: 'directions_bike' },
        { value: 'normal', label: 'Normal', icon: 'directions_run' },
        { value: 'low', label: 'Low', icon: 'directions_walk' }
    ];

    constructor(private firebaseDB: AngularFirestore) {
        this.taskCollection = firebaseDB.collection('tasks');
    }

    getAllTasks(): Observable<Task[]> {
        return this.taskCollection.valueChanges();
    }

    getPriorityOptions(): any[] {
        return this.priorityOptions;
    }

    createNewTask(task: Task) {
        task.status = this.statusOptions.find(status => status.value === 'pending');

        this.taskCollection.add(JSON.parse(JSON.stringify(task)))
            .then(() => {
                console.log('Document successfully written!');
            })
            .catch(error => {
                console.error('Error writing document: ', error);
            });
    }

    updateTask() {

    }

    deleteTask(taskId: string) {

    }

    completeTask() {

    }
}
