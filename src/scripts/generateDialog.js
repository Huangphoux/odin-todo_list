const generateDialogController = (() => {
    const formElmt = document.createElement("form");

    function generateTitle(elmt) {
        const label = document.createElement("label");
        label.htmlFor = "title";
        label.textContent = "Item's title";

        const input = document.createElement("input");
        input.name = "title";
        input.type = "text";
        input.id = "title";
        input.required = true;

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

    generateTitle(formElmt);
    generateDesc(formElmt);
    generateDueDate(formElmt);
    generateIsImportant(formElmt);
    generateIsUrgent(formElmt);

    return { formElmt };
})();

export { generateDialogController };
