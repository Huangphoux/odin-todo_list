import { toDoList } from "./class.js";

const consoleController = (() => {
    let lists = [];

    function getLists() {
        return lists;
    }

    function countList() {
        return lists.length;
    }

    function addList(name = "Untitled") {
        lists.push(new toDoList(name));
        // console.log(`Add new todo list named "${name}"`);
        // printLists();
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
        if (!lists.length) {
            return;
        }

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
        // splice is in-place
        var element = lists[from];
        lists.splice(from, 1);
        lists.splice(to, 0, element);
    }

    function listIndex(targetID) {
        return lists.map((e) => e.id).indexOf(targetID);
    }

    function removeList(targetID) {
        lists.splice(listIndex(targetID), 1);
    }

    function renameList(targetID, newName) {
        let index = listIndex(targetID);
        lists[index].name = newName;
    }

    addList();
    addList("Homework");
    addList("Work");

    addItem(0);
    addItem(1);
    addItem(1);
    addItem(2);
    addItem(2);
    addItem(2);

    return { addList, addItem, printLists, getListsName, removeList, getListItems, moveList, getLists, listIndex, renameList };
})();

export { consoleController };
