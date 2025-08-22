function loadHome() {
    const content = document.querySelector("div#content");
    content.textContent = "";

    const headline = document.createElement("div");
    headline.classList.toggle("headline");
    headline.textContent = "Le Resto !\nThe only French restaurant you need to know !";

    const testimonies = document.createElement("ul");
    testimonies.classList.toggle("testimonies");

    const testimoniesLabel = document.createElement("p");
    testimoniesLabel.textContent = "Testimonies";
    testimonies.appendChild(testimoniesLabel);

    const testimoniesArray = [
        "Wow! The food here is so French-a-licious!",
        "Aww yeah! I can feel the urge to protest running in my veins!",
        "They only serve spaghettis here, which is strange for a French restaurant!",
    ];

    for (const item of testimoniesArray) {
        let testimoniesList = document.createElement("li");
        testimoniesList.textContent = item;
        testimonies.appendChild(testimoniesList);
    }

    const hours = document.createElement("ul");
    hours.classList.toggle("hours");

    const hoursLabel = document.createElement("p");
    hoursLabel.textContent = "Hours";
    hours.appendChild(hoursLabel);

    const hoursArray = ["Monday to Friday: 8 A.M. to 4 P.M.", "Thursday: 10 A.M. to 2 P.M.", "Sunday: We don't serve on Sunday. Get lost!"];

    for (const item of hoursArray) {
        let hoursList = document.createElement("li");
        hoursList.textContent = item;
        hours.appendChild(hoursList);
    }

    const address = document.createElement("div");
    address.classList.toggle("address");

    const addressLabel = document.createElement("p");
    addressLabel.textContent = "Address";
    address.appendChild(addressLabel);

    address.appendChild(document.createTextNode("Somewhere in Paris!\nThat's right we serve French foods in France!"));

    content.appendChild(headline);
    content.appendChild(testimonies);
    content.appendChild(hours);
    content.appendChild(address);
}

export { loadHome };
