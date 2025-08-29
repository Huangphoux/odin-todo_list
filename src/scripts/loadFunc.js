import { consoleController } from "./consoleController.js";

const loadController = (() => {
    function askPermission() {
        return confirm("Just asking to check if you want to delete this.");
    }

    function loadLists() {
        const listsElmt = document.querySelector(".lists");
        listsElmt.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new list";
        listsElmt.appendChild(addBtn);

        let listsArray = consoleController.getLists();

        for (const list of listsArray) {
            const listElmt = document.createElement("li");
            listElmt.setAttribute("data-id", list.id);

            const moveBtn = document.createElement("button");
            moveBtn.textContent = "Move";
            moveBtn.addEventListener("click", () => {
                let moveTo = prompt("Enter number to move to:");
                consoleController.moveList(listElmt.dataset.id, +moveTo);
                loadLists();
            });
            listElmt.appendChild(moveBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                // dataset is in DOM element
                // not in array's item
                if (askPermission()) {
                    consoleController.removeList(listElmt.dataset.id);
                    loadLists();
                }
            });
            listElmt.appendChild(deleteBtn);

            const nameDiv = document.createElement("div");
            nameDiv.classList.toggle("name");
            nameDiv.textContent = list.name;
            nameDiv.addEventListener("click", () => {
                loadList(index);
                // list.classList.toggle("selected");
            });
            listElmt.appendChild(nameDiv);

            listsElmt.appendChild(listElmt);
        }
    }

    function loadList(index = 0) {
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

    loadList();
    loadLists();

    return { loadLists, loadList };
})();

export { loadController };
