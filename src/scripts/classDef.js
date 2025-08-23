class toDoItem {
    constructor(title, desc, dueDate, isImportant, isUrgent) {
        this.id = crypto.randomUUID();

        this.title = title;
        this.desc = desc;
        this.dueDate = new Date(dueDate);

        this.isImportant = isImportant;
        this.isUrgent = isUrgent;

        this.isDone = false;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }

    booleanToString(boolean) {
        return boolean ? "is" : "not";
    }

    get priority() {
        return `${this.booleanToString(this.isImportant).toUpperCase()} important, ${this.booleanToString(this.isUrgent)} urgent`;
    }

    get info() {
        return `${this.title} - ${this.dueDate} - ${this.priority}`;
    }
}

class toDoList {
    listOfItems = [];

    constructor(name = "Untitled") {
        this.id = crypto.randomUUID();

        this.name = name;
    }

    addToDoItem(item) {
        this.listOfItems.push(item);
    }

    deleteToDoItem(index) {
        this.listOfItems.splice(index, 1);
    }

    countToDoItem() {
        return this.listOfItems.length();
    }

    showToDoList() {
        for (let index = 0; index < this.listOfItems.length; index++) {
            const element = this.listOfItems[index];
            console.log(`${index + 1}: ${element.info()}\n`);
        }
    }
}

export { toDoItem, toDoList };
