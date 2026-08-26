// xcode__77 JavaScript

console.log("xcode__77 started 🚀");


// HEADER SCROLL EFFECT

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(1, 8, 20, 0.98)";
        header.style.boxShadow = "0 0 25px rgba(0, 140, 255, 0.35)";
    } else {
        header.style.background = "rgba(2, 6, 17, 0.95)";
        header.style.boxShadow = "none";
    }

});


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll("a");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            "Clicked: " + button.textContent.trim()
        );

    });

});


// PROJECT CARDS

const projects =
    document.querySelectorAll(".project-card");

projects.forEach(function (project) {

    project.addEventListener("mouseenter", function () {

        project.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    project.addEventListener("mouseleave", function () {

        project.style.transform =
            "translateY(0) scale(1)";

    });

});


// PAGE LOAD

window.addEventListener("load", function () {

    console.log(
        "Բարի գալուստ xcode__77 🚀"
    );

});