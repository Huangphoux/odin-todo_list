class toDoItem {
    constructor(title, desc, dueDate, priority, notes, checkList) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList;

        this.isDone = false;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }

    get info() {
        return `${this.title} - ${this.dueDate} - ${this.priority}`;
    }
}

class toDoList {
    list = [];

    constructor(name = "Untitled") {
        this.id = crypto.randomUUID();
        this.name = name;
    }

    addToDoItem(item) {
        this.list.push(item);
    }

    deleteToDoItem(index) {
        this.list.splice(index, 1);
    }

    countToDoItem() {
        return this.list.length();
    }

    showToDoList() {
        for (let index = 0; index < this.list.length; index++) {
            const element = this.list[index];
            console.log(`${index + 1}: ${element.showInfo()}\n`);
        }
    }
}

export { toDoItem, toDoList };
