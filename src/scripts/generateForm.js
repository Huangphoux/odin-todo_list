import { consoleController } from "./consoleController.js";
import { loadController } from "./loadFunc.js";

const generateFormController = (() => {
    function generateTitle(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "title";
        label.textContent = "Item's title";

        const input = document.createElement("input");
        input.name = "title";
        input.type = "text";
        input.id = "title";
        input.required = true;
        input.value = "Something idk";

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateDesc(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "desc";
        label.textContent = "Desciption";

        const input = document.createElement("textarea");
        input.name = "desc";
        input.id = "desc";
        input.rows = 4;
        input.cols = 50;

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateDueDate(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "dueDate";
        label.textContent = "Due date";

        const input = document.createElement("input");
        input.name = "dueDate";
        input.type = "date";
        input.id = "dueDate";
        input.value = "2025-12-25";
        input.required = true;

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateIsImportant(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "isImportant";
        label.textContent = "Is this important ?";

        const input = document.createElement("input");
        input.name = "isImportant";
        input.type = "checkBox";
        input.id = "isImportant";

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateIsUrgent(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "isImportant";
        label.textContent = "Is this urgent ?";

        const input = document.createElement("input");
        input.name = "isUrgent";
        input.type = "checkBox";
        input.id = "isUrgent";

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateSubmitBtn(elmt) {
        const submitBtn = document.createElement("button");
        submitBtn.classList.toggle("submit");
        submitBtn.type = "submit";
        submitBtn.id = "submit";
        submitBtn.textContent = "Submit";

        elmt.appendChild(submitBtn);
    }

    function submitForm(event, formElmt, dialogElmt) {
        event.preventDefault();

        let formObj = Object.fromEntries(new FormData(formElmt));

        const listID = formElmt.dataset.listId;
        let listIndex = consoleController.getListIndex(listID);

        consoleController.addItem(
            listIndex,
            undefined,
            formObj.title,
            formObj.desc,
            formObj.dueDate,
            formObj.isImportant,
            formObj.isUrgent
        );

        dialogElmt.close();
        formElmt.reset();

        loadController.loadLists();
        loadController.loadList(listIndex);
    }

    function getFormElement(listID, itemID) {
        const formElmt = document.createElement("form");
        const dialogElmt = document.querySelector("dialog");

        const itemObj = consoleController.getItem(listID, itemID);
        console.log(itemObj);

        generateTitle(formElmt);
        generateDesc(formElmt);
        generateDueDate(formElmt);
        generateIsImportant(formElmt);
        generateIsUrgent(formElmt);
        generateSubmitBtn(formElmt);

        formElmt.addEventListener("submit", (event) => {
            submitForm(event, formElmt, dialogElmt);
            dialogElmt.textContent = "";
        });

        return formElmt;
    }

    return { getFormElement };
})();

export { generateFormController };
