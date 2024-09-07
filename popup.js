document.getElementById('fillFormButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: fillInputsWithRegex
        });
    });
});

function fillInputsWithRegex() {
    // Select all input elements
    const inputs = document.querySelectorAll('input');

    // Object mapping input types to their default values
    const defaultValues = {
        firstname: "First Name",
        lastname: "Last Name",
        birth: "01/01/1999",
        email: "email@example.com",
        address: "Address",
    };

    // Iterate over inputs to check both 'id' and 'name' attributes against regex patterns and set values accordingly
    inputs.forEach(input => {
        Object.keys(defaultValues).forEach(key => {
            const regex = new RegExp(key, 'i'); // Case-insensitive match
            // Check both 'id' and 'name' attributes for a match
            if (regex.test(input.id) || regex.test(input.name)) {
                input.value = defaultValues[key];
            }
        });
    });
}