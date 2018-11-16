import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    tasks: Observable<any[]>;
    afs: AngularFirestoreCollection<any>;

    constructor(db: AngularFirestore) {
        this.afs = db.collection('tasks');
    }

    ngOnInit(): void {
        this.tasks = this.afs.valueChanges();
    }
}
