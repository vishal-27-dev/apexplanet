// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element by its ID
    const alertButton = document.getElementById('alertButton');

    // Check if the button exists to avoid errors
    if (alertButton) {
        // Add an event listener to the button that triggers on 'click'
        alertButton.addEventListener('click', function() {
            // Show a simple alert message when the button is clicked
            alert('Thank you for your feedback!'); // Changed alert message slightly
        });
    } else {
        console.error("Button with ID 'alertButton' not found.");
    }

});
