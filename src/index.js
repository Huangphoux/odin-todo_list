import { loadHome } from "./scripts/home.js";
import { loadMenu } from "./scripts/menu.js";
import { loadContact } from "./scripts/contact.js";
import "./style.css";

loadHome();

const homeBtn = document.querySelector("button:nth-child(1)");
homeBtn.addEventListener("click", loadHome);

const menuBtn = document.querySelector("button:nth-child(2)");
menuBtn.addEventListener("click", loadMenu);

const contactBtn = document.querySelector("button:nth-child(3)");
contactBtn.addEventListener("click", loadContact);
