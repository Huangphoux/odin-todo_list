import "./style.css";
import { appController } from "./scripts/appController.js";


let app = appController;

app.addItem();
app.addList("New List");
app.addItem(1, "Math Homework", undefined, "2025-12-25", true, true);
app.printLists()