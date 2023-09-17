document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time (you can replace this with your actual content loading logic)
    setTimeout(function() {
        // Hide the spinner
        var spinner = document.getElementById("spin-loader");
        spinner.style.display = "none";

        // Show the content
        var content = document.getElementById("content-loader");
        content.style.display = "block";
    }, 800); // Change 2000 to the actual time it takes to load your content
});