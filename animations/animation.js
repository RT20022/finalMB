
var fade_in = document.querySelectorAll(".fade_in");
var left_in = document.querySelectorAll(".left_in");
var right_in = document.querySelectorAll(".right_in");
var down_in = document.querySelectorAll(".down_in");
var top_in = document.querySelectorAll(".top_in");
var bgColor = document.querySelectorAll(".bgColor");
var donationButton = document.querySelectorAll(".donationButton");
var flip = document.querySelectorAll(".flip");
function aniamte() {
    winh = window.innerHeight
    // FADE IN ANIMATION
    fade_in.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            element.classList.add("fade_in_anime");
        }
        else {
            element.classList.remove("fade_in_anime");
        }
    });

    // LEFT IN ANIMATION
    left_in.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            element.classList.add("left_in_anime");
        }
        else {
            element.classList.remove("left_in_anime");
        }
    });
    // RIGHT IN ANIMATION
    right_in.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            element.classList.add("right_in_anime");
        }
        else {
            element.classList.remove("right_in_anime");
        }
    });
    // DOWN IN ANIMATION
    down_in.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            element.classList.add("down_in_anime");
        }
        else {
            element.classList.remove("down_in_anime");
        }
    });
    // TOP IN ANIMATION
    top_in.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            a=0
            element.classList.add("top_in_anime");
        }
        else {
            element.classList.remove("top_in_anime");
        }
    });
    // bgColor ANIMATION
    // bgColor.forEach(element => {
    //     console.log(winh)
    //     if (element.getBoundingClientRect().top < winh - 155) {
            // element.classList.add("bgColor_anime");
        // }
        // else {
        //     element.classList.remove("bgColor_anime");
        // }
    // });
    // button ANIMATION
    donationButton.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 125) {
            element.classList.add("donationButton_anime");
        }
        // else {
        //     element.classList.remove("donationButton_anime");
        // }
    });
    // flip ANIMATION
    flip.forEach(element => {
        if (element.getBoundingClientRect().top < winh - 150) {
            element.classList.add("flip_anime");
        }
        else {
            element.classList.remove("flip_anime");
        }
    });
}

addEventListener("scroll", aniamte)
