var menuBtn = document.querySelector(".menu-button");
var overlay = document.querySelector(".body-overlay");
var myMenu = document.querySelector(".responsive-menu");
var closeBtn = document.querySelector(".responsive-menu .close");

menuBtn.addEventListener("click", function () {
    overlay.classList.add("show");
    myMenu.classList.add("active");
})

overlay.addEventListener("click", function () {
    overlay.classList.remove("show");
    myMenu.classList.remove("active");
})

closeBtn.addEventListener("click", function () {
    overlay.classList.remove("show");
    myMenu.classList.remove("active");
})

var students = [
    {
        id: 1,
        name: "Navid",
        familyName: "Behroozi",
        phoneNumber: "09397967117",
        grade: "Hashtom",
        gender: true
    },
    {
        id: 2,
        name: "Hana",
        familyName: "Harchi",
        phoneNumber: "09121234567",
        grade: "Haftom",
        gender: false
    },
    {
        id: 3,
        name: "Reza",
        familyName: "Yousefi",
        phoneNumber: "09127654321",
        grade: "Haftom",
        gender: true
    }
]


var myContainer = document.querySelector(".wrapper .container");

students.forEach(function (student) {
    if (student.gender == true) {
        var pEl = document.createElement("p");
        pEl.innerHTML = student.name + " " + student.familyName;
        myContainer.appendChild(pEl)
    }
});


// Array
// Object in Array
// forEach() || map || for || while
// CreateElement()
// innerHTML || textContent
// apendChild()
// if()