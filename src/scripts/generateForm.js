import { consoleController } from "./consoleController.js";
import { loadController } from "./loadFunc.js";

const generateFormController = (() => {
    function generateTitle(elmt, obj) {
        const label = document.createElement("label");
        label.htmlFor = "title";
        label.textContent = "Item's title";

        const input = document.createElement("input");
        input.name = "title";
        input.type = "text";
        input.id = "title";
        input.required = true;
        input.value = "Untitled item";

        if (obj !== undefined) {
            input.value = obj.title;
        }

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateDesc(elmt, obj) {
        const label = document.createElement("label");
        label.htmlFor = "desc";
        label.textContent = "Desciption";

        const input = document.createElement("textarea");
        input.name = "desc";
        input.id = "desc";
        input.rows = 4;
        input.cols = 50;

        input.value = "You should elaborate on about this item here.";

        if (obj !== undefined) {
            input.value = obj.desc;
        }

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function readableDueDate(date) {
        let dateObj = date;

        let day = ("0" + dateObj.getDate()).slice(-2);
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        let year = dateObj.getFullYear();

        return `${year}-${month}-${day}`;
    }

    function generateDueDate(elmt, obj) {
        const label = document.createElement("label");
        label.htmlFor = "dueDate";
        label.textContent = "Due date";

        const input = document.createElement("input");
        input.name = "dueDate";
        input.type = "date";
        input.id = "dueDate";
        input.value = readableDueDate(new Date());
        
        input.required = true;

        if (obj !== undefined) {
            input.value = obj.readableDueDate;
        }

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateIsImportant(elmt, obj) {
        const label = document.createElement("label");
        label.htmlFor = "isImportant";
        label.textContent = "Is this important ?";

        const input = document.createElement("input");
        input.name = "isImportant";
        input.type = "checkBox";
        input.id = "isImportant";

        if (obj !== undefined && obj.isImportant) {
            input.checked = true;
        }

        elmt.appendChild(label);
        elmt.appendChild(input);
    }

    function generateIsUrgent(elmt, obj) {
        const label = document.createElement("label");
        label.htmlFor = "isImportant";
        label.textContent = "Is this urgent ?";

        const input = document.createElement("input");
        input.name = "isUrgent";
        input.type = "checkBox";
        input.id = "isUrgent";

        if (obj !== undefined && obj.isUrgent) {
            input.checked = true;
        }

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

    function submitForm(event, formElmt, dialogElmt, obj) {
        event.preventDefault();

        let formObj = Object.fromEntries(new FormData(formElmt));

        const listID = formElmt.dataset.listId;
        let listIndex = consoleController.getListIndex(listID);

        let itemID = "";
        if (obj !== undefined) {
            itemID = obj.id;
        }

        consoleController.addItem(listIndex, itemID, formObj.title, formObj.desc, formObj.dueDate, formObj.isImportant, formObj.isUrgent);

        dialogElmt.close();
        formElmt.reset();

        loadController.loadLists();
        loadController.loadList(listIndex);
    }

    function getFormElement(listID, itemID) {
        const formElmt = document.createElement("form");
        const dialogElmt = document.querySelector("dialog");

        const itemObj = consoleController.getItem(listID, itemID);

        generateTitle(formElmt, itemObj);
        generateDesc(formElmt, itemObj);
        generateDueDate(formElmt, itemObj);
        generateIsImportant(formElmt, itemObj);
        generateIsUrgent(formElmt, itemObj);
        generateSubmitBtn(formElmt, itemObj);

        formElmt.addEventListener("submit", (event) => {
            submitForm(event, formElmt, dialogElmt, itemObj);
            dialogElmt.textContent = "";
        });

        return formElmt;
    }

    return { getFormElement };
})();

export { generateFormController };
