document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after the DOM has loaded

    // Example: Toggle visibility of replies when clicking on a button
    const replyButtons = document.querySelectorAll(".left_div__reply");
    replyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const replies = button.parentElement.querySelector(".replies");
            replies.classList.toggle("thapa_show");
        });
    });

    // Example: Subscribe form submission
    const subscribeForm = document.getElementById("subscribeForm");
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Simulate form submission (replace this with your actual submission code)
        setTimeout(() => {
            alert("Thanks for subscribing!"); // Example: Show a thank you message
        }, 1000);
        subscribeForm.reset(); // Reset the form fields
    });

    // Example: Animate the main heading
    const mainHeading = document.querySelector(".main_heading");
    setInterval(() => {
        mainHeading.style.transform = "rotateZ(1deg)"; // Rotate the heading slightly
        setTimeout(() => {
            mainHeading.style.transform = "rotateZ(-1deg)"; // Rotate the heading in the opposite direction
        }, 500);
    }, 1000);

    // Example: Animate the like buttons
    const likeButtons = document.querySelectorAll(".left_div__like");
    likeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            button.classList.add("liked"); // Add a class to apply a "liked" animation
            setTimeout(() => {
                button.classList.remove("liked"); // Remove the class after a short delay
            }, 1000);
        });
    });

    // Add more JavaScript code here as needed
});
