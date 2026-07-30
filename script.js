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
const appointmentForm = document.getElementById("appointment-form");
const successMessage = document.getElementById("success-message");

appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.textContent =
        "✅ Appointment request submitted successfully!";

    appointmentForm.reset();
});
function searchDoctor() {
    const searchText = document.getElementById("doctorSearch").value.toLowerCase();
    const result = document.getElementById("searchResult");

    if (searchText === "") {
        result.textContent = "Please enter a doctor name or department.";
    } 
    else if (searchText.includes("rajesh") || searchText.includes("cardio")) {
        result.textContent = "👨‍⚕️ Dr. Rajesh Sharma - Cardiologist";
    } 
    else if (searchText.includes("priya") || searchText.includes("derma")) {
        result.textContent = "👩‍⚕️ Dr. Priya Das - Dermatologist";
    } 
    else if (searchText.includes("amit") || searchText.includes("ortho")) {
        result.textContent = "👨‍⚕️ Dr. Amit Roy - Orthopedic";
    } 
    else {
        result.textContent = "❌ No doctor found. Please try another search.";
    }
}
function subscribeNewsletter() {
    const email = document.getElementById("newsletterEmail").value;
    const message = document.getElementById("newsletterMessage");

    if (email === "") {
        message.textContent = "Please enter your email address.";
    } else {
        message.textContent = "✅ Thank you for subscribing!";
        document.getElementById("newsletterEmail").value = "";
    }
}
