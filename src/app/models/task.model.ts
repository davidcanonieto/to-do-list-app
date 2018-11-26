import { User } from './user.model';
import { Tag } from './tag.model';

export class Task {
    title: string;
    description: string;
    dueDate: Date;
    created: Date;
    involvedUsers: User[];
    priority: any;
    status: any;
    tags: Tag[];

    constructor(obj?: any) {
        if (obj) {
            this.title = obj.title || null;
            this.description = obj.description || null;
            this.dueDate = obj.dueDate || null;
            this.involvedUsers = obj.involvedUsers || null;
            this.priority = obj.priority || null;
            this.status = obj.status || null;
            this.tags = obj.tags || null;
        }
    }
}
