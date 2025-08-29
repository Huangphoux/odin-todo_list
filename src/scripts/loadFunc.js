import { consoleController } from "./consoleController.js";

const loadController = (() => {
    function loadLists() {
        const lists = document.querySelector(".lists");
        lists.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new list";
        lists.appendChild(addBtn);

        let listsName = consoleController.getListsName();

        for (const name of listsName) {
            const list = document.createElement("li");

            const moveBtn = document.createElement("button");
            moveBtn.textContent = "Move";
            list.appendChild(moveBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            list.appendChild(deleteBtn);

            const nameDiv = document.createElement("div");
            nameDiv.classList.toggle("name");
            nameDiv.textContent = name;
            list.appendChild(nameDiv);

            lists.appendChild(list);
        }
    }

    function loadList() {
        const list = document.querySelector(".list");
        list.textContent = "";

        const addBtn = document.createElement("button");
        addBtn.classList.toggle("add");
        addBtn.textContent = "Add new item";
        list.appendChild(addBtn);

        let listItems = consoleController.getListItems(0);

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

    // consoleController.addItem();
    // consoleController.addItem();
    // consoleController.addItem();
    // consoleController.addList("New list");
    // consoleController.addList("New list");

    loadList();
    loadLists();

    return { loadLists, loadList };
})();

export { loadController };
