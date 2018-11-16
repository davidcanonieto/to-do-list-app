export class User {
    name: string;
    lastName: string;

    constructor(obj: any) {
        if (obj) {
            this.name = obj.name || null;
            this.lastName = obj.lastName || null;
        }
    }
}
