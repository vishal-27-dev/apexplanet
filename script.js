// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get a reference to the button element using its ID
    const myButton = document.getElementById('alertButton');

    // Check if the button was actually found
    if (myButton) {
        // Add an event listener to the button
        // This function will run when the button is clicked
        myButton.addEventListener('click', function() {
            // Show a simple alert message in the browser
            alert('Thanks for checking out Vis Recommendations! More features coming soon.');
        });
    } else {
        console.error("Button with ID 'alertButton' not found!"); // Log an error if button doesn't exist
    }

});
