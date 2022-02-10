// Mobile Menu
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



// Home Typewriter

let i = 0;
let j = 0;
const heading = "Hi, I'm Samuel,"
const para = "a web developer based in London, England"
let speed = 100;

setInterval(function typeWriter() {
    if (i < heading.length) {
        document.getElementById("main__heading").innerHTML += heading.charAt(i);
        i++;
    } else if (i >= heading.length && j < para.length) {
        document.getElementById("main__paragraph").innerHTML += para.charAt(j);
        j++;
    }
}, speed)



// Projects

const projects = document.querySelectorAll(".project-container");
let currentId;

projects.forEach(function(project) {
    project.addEventListener("click", function() {
        if (currentId) {
            document.getElementById(`${currentId}`).classList.remove("showDesc");
        } 

        switch(project.id) {
            case "p1":
                document.getElementById("p1DescLong").classList.add("showDesc");
                currentId = "p1DescLong"
                break;
            case "p2":
                document.getElementById("p2DescLong").classList.add("showDesc");
                currentId = "p2DescLong"
                break;
            case "p3":
                document.getElementById("p3DescLong").classList.add("showDesc");
                currentId = "p3DescLong"
                break;
        }
    })
})