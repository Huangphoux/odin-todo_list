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
        lists.push(new toDoList(fixBlankName(name)));
        // console.log(`Add new todo list named "${name}"`);
        // printLists();
    }

    function addItem(index = 0, id = "", title, desc, dueDate, isImportant, isUrgent) {
        const itemIndex = getItemIndex(lists[index].id, id);

        if (itemIndex !== -1) {
            lists[index].items[itemIndex].setEverything(title, desc, dueDate, isImportant, isUrgent);
        } else {
            lists[index].addItem(title, desc, dueDate, isImportant, isUrgent);
        }
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

    function getListIndex(targetID) {
        return lists.map((e) => e.id).indexOf(targetID);
    }

    function removeList(targetID) {
        lists.splice(getListIndex(targetID), 1);
    }

    function fixBlankName(name) {
        if (!name) {
            return "Unnamed";
        }

        return name;
    }

    function getItemIndex(listID, itemID) {
        const listIndex = getListIndex(listID);
        return lists[listIndex].items.map((e) => e.id).indexOf(itemID);
    }

    function renameList(targetID, newName) {
        let index = getListIndex(targetID);
        lists[index].name = fixBlankName(newName);
    }

    function removeItem(listID, itemID) {
        const listIndex = getListIndex(listID);
        const itemIndex = getItemIndex(listID, itemID);

        lists[listIndex].deleteItem(itemIndex);
    }

    function toggleItem(listID, itemID) {
        const listIndex = getListIndex(listID);
        const itemIndex = getItemIndex(listID, itemID);

        lists[listIndex].toggleItem(itemIndex);

        return lists[listIndex].items[itemIndex].isDone;
    }

    addList();
    addList("Homework");
    addList("Work");

    addItem(0, undefined, "something", "no", "1905-09-28", true, true);
    addItem(1, undefined, "something different", "idk", "1984-06-28", false, true);
    addItem(1, undefined, "something different", "idk", "1984-06-28", true, false);
    addItem(2, undefined, "something different", "idk", "1984-06-28", false, false);
    addItem(2);
    addItem(2);

    return {
        addList,
        addItem,
        printLists,
        getListsName,
        removeList,
        getListItems,
        moveList,
        getLists,
        getListIndex,
        renameList,
        countList,
        removeItem,
        toggleItem,
    };
})();

export { consoleController };
