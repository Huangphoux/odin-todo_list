import { consoleController } from "./consoleController.js";
import { loadController } from "./loadFunc.js";

const displayController = (() => {
    const dialog = document.querySelector("dialog");

    // submitForm
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();

        let formObj = Object.fromEntries(new FormData(form));

        library.addBookToLibrary(formObj.title, formObj.author, +formObj.pageNumber, "isRead" in formObj ? true : false);

        library.displayLibrary();

        form.reset();
        dialog.close();
    });

    // addBtn
    document.querySelector(".list > button").addEventListener("click", () => {
        dialog.showModal();
    });

    // closeBtn
    document.querySelector("dialog > button").addEventListener("click", () => {
        dialog.close();
    });

    return {};
})();

export { displayController };
