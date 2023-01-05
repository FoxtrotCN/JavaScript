export class Task {
    constructor(task) {
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.maked = new Date();
    }
}