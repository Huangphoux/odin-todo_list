import { consoleController } from "./consoleController.js";

const loadController = (() => {
    function askPermission() {
        return confirm("Just want to check if you intend to delete this.");
    }

    function moveListBtn(elmt) {
        let toPosition = prompt("You want to move this to which position?");
        let fromPosition = consoleController.listIndex(elmt.dataset.id);
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
        let index = consoleController.listIndex(elmt.dataset.id);

        if (index < 0) {
            index = 0;
        }

        loadList(index);
    }

    function askForName() {
        let name = prompt("How will this new list going to be called?", "Untitled");

        return name;
    }

    function addListBtn() {
        let name = askForName();

        if (!name) {
            return;
        }

        consoleController.addList(name);
        loadLists();
        loadList(consoleController.countList() - 1);
        window.scrollTo(0, document.body.scrollHeight);
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

    function loadList(index) {
        const list = document.querySelector(".list");
        list.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new item";
        list.appendChild(addBtn);

        const listName = document.createElement("p");
        listName.textContent = consoleController.getListsName()[index] + "'s todo items";
        list.appendChild(listName);

        let listItems = consoleController.getListItems(index);

        if (!listItems) {
            return;
        }

        for (const item of listItems) {
            const itemLi = document.createElement("li");

            const expandBtn = document.createElement("button");
            expandBtn.textContent = "Expand";
            itemLi.appendChild(expandBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            itemLi.appendChild(deleteBtn);

            const nameDiv = document.createElement("div");
            nameDiv.classList.toggle("name");
            nameDiv.textContent = item.title;
            itemLi.appendChild(nameDiv);

            const dueDateDiv = document.createElement("div");
            dueDateDiv.classList.toggle("dueDate");
            dueDateDiv.textContent = `${item.dueDate.getDate()}/${item.dueDate.getMonth() + 1}/${item.dueDate.getFullYear()}`;
            itemLi.appendChild(dueDateDiv);

            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.id = "isDone";
            itemLi.appendChild(checkBox);

            list.appendChild(itemLi);
        }
    }

    loadList(0);
    loadLists();

    return { loadLists, loadList };
})();

export { loadController };
