import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Task } from '../models/task.model';
import { TaskWithId } from '../models/taskWithId.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    tasks: Observable<any[]>;
    afs: AngularFirestoreCollection<any>;

    constructor(db: AngularFirestore) {
        this.afs = db.collection<Task>('tasks');
    }

    ngOnInit(): void {
        this.tasks = this.afs.snapshotChanges()
        .pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as TaskWithId;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
        this.tasks = this.afs.valueChanges();
    }
}
