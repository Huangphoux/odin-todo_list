import linguine from "../assets/nima-naseri-d80F2HScZeg-unsplash.jpg";
import macaroni from "../assets/mehmet-keskin-UgxrpGec3ns-unsplash.jpg";
import ravioli from "../assets/tom-dillon-9eIbwtyl4Xs-unsplash.jpg";

function loadMenu() {
    const content = document.querySelector("div#content");
    content.textContent = "";

    const headline = document.createElement("div");
    headline.classList.toggle("headline");
    headline.textContent = "Menu !";

    const spaghetti = document.createElement("ul");
    spaghetti.classList.toggle("menu");

    const spaghettiArray = ["Spaghettis", "Apparently, there's all kinds of spaghetti out there!", "But we only serve three kind here."];

    for (const item of spaghettiArray) {
        let spaghettiLabel = document.createElement("p");
        spaghettiLabel.textContent = item;
        spaghetti.appendChild(spaghettiLabel);
    }

    const spaghettiName = ["Linguine", "Macaroni", "Ravioli"];
    const spaghettiImage = [linguine, macaroni, ravioli];
    const spaghettiPrice = ["20$", "40$", "80$"];

    for (let index = 0; index < 3; index++) {
        let spaghettiItem = document.createElement("li");

        let spaghettiItemName = document.createElement("div");
        spaghettiItemName.textContent = spaghettiName[index];
        spaghettiItem.appendChild(spaghettiItemName);

        let spaghettiItemImage = document.createElement("img");
        spaghettiItemImage.src = spaghettiImage[index];
        spaghettiItem.appendChild(spaghettiItemImage);

        let spaghettiItemPrice = document.createElement("div");
        spaghettiItemPrice.textContent = spaghettiPrice[index];
        spaghettiItem.appendChild(spaghettiItemPrice);

        spaghetti.appendChild(spaghettiItem);
    }

    const beverage = document.createElement("ul");
    beverage.classList.toggle("menu");

    const beverageArray = ["Beverages", "I think you lost the memo.", "We ONLY serve SPA-ghet-TEA here.", "So no drinks."];

    for (const item of beverageArray) {
        let beverageLabel = document.createElement("p");
        beverageLabel.textContent = item;
        beverage.appendChild(beverageLabel);
    }

    const beverageGetLost = document.createElement("div");
    beverageGetLost.classList.toggle("headline");
    beverageGetLost.textContent = "So, GET LOST!";
    beverage.appendChild(beverageGetLost);

    content.appendChild(headline);
    content.appendChild(spaghetti);
    content.appendChild(beverage);
}

export { loadMenu };
