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

    // Regular expressions to match inputs in the name attribute
    const firstNameRegex = /firstname/i;
    const lastnameRegex = /lastname/i;
    const dateOfBirthRegex = /birth/i;
    const emailRegex = /email/i;
    const addressRegex = /address/i;    

    // Filter inputs based on the regular expression and set their value
    inputs.forEach(input => {
        if (firstNameRegex.test(input.id)) {
            input.value = "Yashuk";
        }
        if (lastnameRegex.test(input.id)) {
            input.value = "Vashisht";
        }
        if (dateOfBirthRegex.test(input.id)) {
            input.value = "06/08/1998";
        }
        if (addressRegex.test(input.id)) {
            input.value = "53 Arbour Boulevard Burnside Heights";
        }
        if (emailRegex.test(input.id)) {
            input.value = "yashukvashisht@gmail.com"
        }
    });
}
