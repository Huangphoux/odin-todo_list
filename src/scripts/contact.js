function loadContact() {
    const content = document.querySelector("div#content");
    content.textContent = "";

    const headline = document.createElement("div");
    headline.classList.toggle("headline");
    headline.textContent = "Contact Us !";

    const contact = document.createElement("div");
    contact.classList.toggle("address");

    const contactArray = ["Le Resto !", "0969-696-969", "leresto696@geezmale.come", "696, Somewhere Street, IneFranse, France"];

    for (const item of contactArray) {
        let contactLabel = document.createElement("p");
        contactLabel.textContent = item;
        contact.appendChild(contactLabel);
    }

    content.appendChild(headline);
    content.appendChild(contact);
}

export { loadContact };
