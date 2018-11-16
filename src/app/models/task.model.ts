import { User } from './user.model';
import { Tag } from './tag.model';

export class Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    created: Date;
    involvedUsers: User[];
    priority: string;
    status: string;
    tags: Tag[];

    constructor(obj?: any) {
        if (obj) {
            this.id = obj.id || null;
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
