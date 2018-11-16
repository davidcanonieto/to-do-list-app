export class Tag {
    id: string;
    title: string;

    constructor(obj: any) {
        if (obj) {
            this.id = obj.id || null;
            this.title = obj.title || null;
        }
    }
}
