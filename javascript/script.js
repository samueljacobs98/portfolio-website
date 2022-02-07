const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelectorAll(".menu-btn");


// Open Menu
burger.addEventListener("click", function() {
    menu.classList.add("show-element")
    closeBtn.classList.add("show-element")
});

// Close Menu + Jump to Section
menuBtn.forEach(function (btn) {
    btn.addEventListener("click", function() {
        menu.classList.remove("show-element")
        closeBtn.classList.remove("show-element")
    })
})

// Close Menu
closeBtn.addEventListener("click", function() {
    menu.classList.remove("show-element")
    closeBtn.classList.remove("show-element")
});

