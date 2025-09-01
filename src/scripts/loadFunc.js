import { consoleController } from "./consoleController.js";

const loadController = (() => {
    function askPermission() {
        return confirm("Just want to check if you intend to delete this.");
    }

    function moveListBtn(elmt) {
        let toPosition = prompt("You want to move this to which position?");
        let fromPosition = consoleController.getListIndex(elmt.dataset.id);
        consoleController.moveList(fromPosition, +toPosition - 1);
        loadLists();
    }

    function deleteListBtn(elmt) {
        // dataset is in DOM element
        // not in array's item
        if (askPermission()) {
            consoleController.removeList(elmt.dataset.id);
            loadLists();
        }
    }

    function selectList(elmt) {
        let index = consoleController.getListIndex(elmt.dataset.id);

        if (index < 0) {
            index = 0;
        }

        loadList(index);
    }

    function askForName() {
        return prompt("How will this new list going to be called?", "Untitled");
    }

    function addListBtn() {
        let name = askForName();

        if (!name) {
            return;
        }

        consoleController.addList(name);
        loadLists();
        loadList(consoleController.countList() - 1);
    }

    function renameListBtn(elmt) {
        consoleController.renameList(elmt.dataset.id, askForName());
        loadLists();
    }

    function formatCountItem(number) {
        if (number > 1) {
            return number + " items";
        }
        return number + " item";
    }

    function loadLists() {
        const listsElmt = document.querySelector(".lists");
        listsElmt.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new list";
        addBtn.addEventListener("click", () => {
            addListBtn();
        });
        listsElmt.appendChild(addBtn);

        let listsArray = consoleController.getLists();

        for (const list of listsArray) {
            const listElmt = document.createElement("li");
            listElmt.setAttribute("data-id", list.id);

            listElmt.addEventListener("click", () => {
                selectList(listElmt);
            });

            const moveBtn = document.createElement("button");
            moveBtn.textContent = "Move";
            moveBtn.addEventListener("click", () => {
                moveListBtn(listElmt);
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                deleteListBtn(listElmt);
            });

            const renameBtn = document.createElement("button");
            renameBtn.textContent = "Rename";
            renameBtn.addEventListener("click", () => {
                renameListBtn(listElmt);
            });

            const nameDiv = document.createElement("div");
            nameDiv.classList.toggle("name");
            nameDiv.textContent = list.name;

            const countDiv = document.createElement("div");
            countDiv.classList.toggle("count");
            countDiv.textContent = formatCountItem(list.countItem());

            listElmt.appendChild(moveBtn);
            listElmt.appendChild(renameBtn);
            listElmt.appendChild(deleteBtn);
            listElmt.appendChild(nameDiv);
            listElmt.appendChild(countDiv);

            listsElmt.appendChild(listElmt);
        }
    }

    function deleteItemBtn(listElmt, itemElmt) {
        // dataset is in DOM element
        // not in array's item
        if (!askPermission()) {
            return;
        }

        consoleController.removeItem(listElmt.dataset.id, itemElmt.dataset.id);
        loadLists();
        loadList(consoleController.getListIndex(listElmt.dataset.id));
    }

    function toggleItemBtn(listElmt, itemElmt) {
        consoleController.toggleItem(listElmt.dataset.id, itemElmt.dataset.id);
        loadLists();
        loadList(consoleController.getListIndex(listElmt.dataset.id));
    }

    function loadList(index) {
        const list = document.querySelector(".list");
        list.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new item";
        list.appendChild(addBtn);

        const listName = document.createElement("p");
        const listObj = consoleController.getLists()[index];
        listName.textContent = listObj.name + "'s todo items";
        listName.setAttribute("data-id", listObj.id);
        list.appendChild(listName);

        let listItems = consoleController.getListItems(index);

        if (!listItems) {
            return;
        }

        for (const item of listItems) {
            const itemLi = document.createElement("li");
            itemLi.setAttribute("data-id", item.id);

            const expandBtn = document.createElement("button");
            expandBtn.textContent = "Expand";

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                deleteItemBtn(listName, itemLi);
            });

            const nameDiv = document.createElement("div");
            nameDiv.classList.toggle("name");
            nameDiv.textContent = item.title;

            const priorityDiv = document.createElement("div");
            priorityDiv.classList.toggle("priority");
            priorityDiv.textContent = item.priority;
            if (item.isImportant) {
                priorityDiv.classList.toggle("important");
            }
            if (item.isUrgent) {
                priorityDiv.classList.toggle("urgent");
            }

            const dueDateDiv = document.createElement("div");
            dueDateDiv.classList.toggle("dueDate");
            dueDateDiv.textContent = `Due: ${item.dueDate.getDate()}/${item.dueDate.getMonth() + 1}/${item.dueDate.getFullYear()}`;

            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.addEventListener("change", () => {
                toggleItemBtn(listName, itemLi);
            });
            checkBox.id = "isDone";
            checkBox.checked = item.isDone;

            itemLi.appendChild(expandBtn);
            itemLi.appendChild(deleteBtn);
            itemLi.appendChild(nameDiv);
            itemLi.appendChild(priorityDiv);
            itemLi.appendChild(dueDateDiv);
            itemLi.appendChild(checkBox);

            list.appendChild(itemLi);
        }
    }

    loadList(0);
    loadLists();

    return { loadLists, loadList };
})();

export { loadController };
