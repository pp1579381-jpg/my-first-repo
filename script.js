// 1. Welcome Message
console.log("Welcome to My Website!");

// 2. Click Me Button
const buttons = document.querySelectorAll("button");

if (buttons.length > 0) {
    buttons[0].addEventListener("click", function () {
        alert("Welcome to my website! Have a great day.");
    });
}

// 3. Smooth Navigation
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation: " + link.textContent);
    });
});

// 4. Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert(
            "Thank you, " + name + "!\n" +
            "Your form was submitted successfully."
        );

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        form.reset();
    });
}

// 5. Current Year in Footer
const footer = document.querySelector("footer");

if (footer) {
    const paragraph = footer.querySelector("p");

    if (paragraph) {
        paragraph.innerHTML =
            "&copy; " + new Date().getFullYear() +
            " My Website. All rights reserved.";
    }
}

// 6. Page Loaded Message
window.addEventListener("load", function () {
    console.log("Website loaded successfully!");
});