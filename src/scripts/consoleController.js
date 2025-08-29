import { toDoItem, toDoList } from "./class.js";

const consoleController = (() => {
    let lists = [];

    function countList() {
        return lists.length;
    }

    function addList(name = "Untitled") {
        lists.push(new toDoList(name));
        // console.log(`Add new todo list named "${name}"`);
        // printLists();
    }

    function deleteList(index) {
        lists.splice(index, 1);
    }

    function addItem(index = 0, title, desc, dueDate, isImportant, isUrgent) {
        lists[index].addItem(title, desc, dueDate, isImportant, isUrgent);
        // console.log(`Add new todo item in ${lists[index].name}`);
        // printLists();
    }

    function getListsName() {
        return lists.map(({ name }) => name);
    }

    function getListItems(index) {
        return lists[index].items;
    }

    function printLists() {
        for (let index = 0; index < lists.length; index++) {
            const element = lists[index];

            console.log(`List #${index}: ${element.name}`);
            element.printList();
        }
    }

    function moveList(from, to) {
        let temp = lists.splice(from, 1)[0];
        lists.items.splice(to, 0, temp);
    }


    addList();

    return { addList, addItem, printLists, getListsName, deleteList, getListItems };
})();

export { consoleController };
