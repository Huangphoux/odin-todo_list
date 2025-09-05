import { toDoItem, toDoList } from './class.js';

const consoleController = (() => {
    let lists = [];

    function getLists() {
        return lists;
    }

    function countList() {
        return lists.length;
    }

    function addList(name = 'Untitled') {
        lists.push(new toDoList(fixBlankName(name)));
        // console.log(`Add new todo list named "${name}"`);
        // printLists();
    }

    function addItem(
        index = 0,
        id = '',
        title,
        desc,
        dueDate,
        isImportant,
        isUrgent,
    ) {
        const itemIndex = getItemIndex(lists[index].id, id);

        if (itemIndex !== -1) {
            lists[index].items[itemIndex].setEverything(
                title,
                desc,
                dueDate,
                isImportant,
                isUrgent,
            );
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
            return 'Unnamed';
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

    function getItem(listID, itemID) {
        const listIndex = getListIndex(listID);
        const itemIndex = getItemIndex(listID, itemID);

        return lists[listIndex].items[itemIndex];
    }

    function saveToDisk() {
        const listsJSON = JSON.stringify(lists);
        localStorage.setItem('toDoList', listsJSON);
    }

    function loadFromDisk() {
        const listsJSON = localStorage.getItem('toDoList');
        const listsObj = JSON.parse(listsJSON);

        if (listsJSON === null || !listsObj.length) {
            localStorage.clear();
            addList();
        } else {
            const newLists = [];

            for (let list of listsObj) {
                let newList = new toDoList(list.name);
                newList.id = list.id;

                for (let item of list.items) {
                    let newItem = new toDoItem(
                        item.title,
                        item.desc,
                        item.dueDate,
                        item.isImportant,
                        item.isUrgent,
                    );

                    newItem.id = item.id;
                    newItem.isDone = item.isDone;

                    newList.items.push(newItem);
                }
                newLists.push(newList);
            }

            lists = [...newLists];
        }
    }

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
        getItem,
        saveToDisk,
        loadFromDisk,
    };
})();

export { consoleController };
