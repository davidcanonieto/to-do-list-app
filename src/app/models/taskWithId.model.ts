import { Task } from './task.model';


export class TaskWithId extends Task {
    id: string;

    constructor(obj?: any) {
        super(obj);
        this.id = obj.id || null;
    }
}
