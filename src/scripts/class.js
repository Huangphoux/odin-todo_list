class toDoItem {
    constructor(title = "untitled", desc = "", dueDate = new Date(), isImportant = false, isUrgent = false) {
        this.id = crypto.randomUUID();

        this.title = title;
        this.desc = desc;
        this.dueDate = new Date(dueDate);

        this.isImportant = isImportant;
        this.isUrgent = isUrgent;

        this.isDone = false;
    }

    toggleIsImporant() {
        this.isImportant = !this.isImportant;
    }

    toggleIsUrgent() {
        this.isUrgent = !this.isUrgent;
    }
    toggleIsDone() {
        this.isDone = !this.isDone;
    }

    booleanToString(boolean) {
        return boolean ? "" : "not ";
    }

    get priority() {
        let temp = [];

        if (this.isUrgent) {
            temp.push("urgent");
        }
        if (this.isImportant) {
            temp.push("important");
        }
        if (!temp.length) {
            temp.push("delete this!");
        }

        return temp.join(" ");
    }

    get info() {
        return `${this.title} - ${this.readableDueDate} - ${this.priority}`;
    }

    get readableDueDate() {
        return `${this.dueDate.getFullYear()}/${this.dueDate.getMonth() + 1}/${this.dueDate.getDate()}`;
    }

    setEverything(title = "untitled", desc = "", dueDate = new Date(), isImportant = false, isUrgent = false) {
        this.title = title;
        this.desc = desc;
        this.dueDate = new Date(dueDate);

        this.isImportant = isImportant;
        this.isUrgent = isUrgent;
    }
}

class toDoList {
    items = [];

    constructor(name = "Untitled") {
        this.id = crypto.randomUUID();

        this.name = name;
    }

    addItem(title, desc, dueDate, isImportant, isUrgent) {
        this.items.push(new toDoItem(title, desc, dueDate, isImportant, isUrgent));
    }

    deleteItem(index) {
        this.items.splice(index, 1);
    }

    clearList() {
        this.items.length = 0;
    }

    countItem() {
        return this.items.length;
    }

    printList() {
        for (let index = 0; index < this.items.length; index++) {
            const element = this.items[index];
            console.log(`Item #${index + 1}: ${element.info}\n`);
        }
    }

    toggleItem(index) {
        this.items[index].toggleIsDone();
    }

    moveItem(from, to) {
        let temp = this.items.splice(from, 1)[0];
        this.items.splice(to, 0, temp);
    }
}

export { toDoItem, toDoList };
