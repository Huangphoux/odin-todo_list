import { consoleController } from "./consoleController.js";

const displayController = (() => {
    const dialog = document.querySelector("dialog");
    const form = document.querySelector("form");

    function submitItem() {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let formObj = Object.fromEntries(new FormData(form));

            library.addBookToLibrary(formObj.title, formObj.author, +formObj.pageNumber, "isRead" in formObj ? true : false);

            library.displayLibrary();

            form.reset();
            dialog.close();
        });
    }

    const addBtn = document.querySelector("body > button");
    addBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    const closeBtn = document.querySelector("dialog > button");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });

    return { submitItem };
})();

export { displayController };
