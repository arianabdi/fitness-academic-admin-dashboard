// Create a new <head> element
var newHead = document.createElement("head");

// Load the external HTML file containing the <head> content
fetch("../layout/head.html")
    .then(response => response.text())
    .then(headContent => {
        // Set the innerHTML of the new <head> element with the loaded content
        newHead.innerHTML = headContent;

        // Replace the existing <head> with the new <head>
        document.head.parentNode.appendChild(newHead, document.head);
    })
    .catch(function(error) {
        console.error("Error loading head.html:", error);
    });