document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        alert("Welcome! Online Appointment Feature Coming Soon.");
    });

});
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}
