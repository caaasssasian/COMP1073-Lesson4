/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function() { // beginning of IIFE

console.log("App Started");
console.log("Page Title: " + document.title);
switch (document.title) {
    case "Home":

    // declare/initialize firstHeading variable
    // firstHeading variable creates a link (reference) to the H! element
    let firstHeading = document.getElementById("firstHeading");

    firstHeading.style.color = "#0000FF";
    firstHeading.style.fontWeight = "300";
    firstHeading.style.fontStyle = "italic";
    firstHeading.style.opacity = "0.5";

    // THREE STEPS FOR INJECTING CONTENT ONTO YOUR PAGE
    // STEP 1 - create a reference to an element (reference variable)
    let firstParagraph = document.getElementById("firstParagraph");
    // STEP 2 - create a variable that contains your content (content variable)
    let paragraphContent = "It was a sunny day in Florida. It felt great. I love the sun.";
    // STEP 3 - assign the variable wth your content to the textContent property of the reference variable
    firstParagraph.textContent = paragraphContent;


    let secondParagraph = document.getElementById("secondParagraph");

    let myHTMLContent = "<h2>Second Heading</h2>"
                        + "<p>This is an inner paragraph to the second paragraph</p>"

    secondParagraph.innerHTML = myHTMLContent;


    // create a reference to the button on the page (index.html)
    let clickMeButton = document.getElementById("clickMeButton");

    // add an eent listener - for the click event and call the Click function
    clickMeButton.addEventListener("click", Click)

    // click function - used as an event handler
    function Click() {
        console.log("clicked!");
    }
    break;

    case "Projects":

        let myVariable = 10;
        MyFunction();

        // named function
        function MyFunction() {
            let myVariable = 20;

            console.log(myVariable);
        }


    break;
    
    case "Contact":

        let fname = document.getElementById("fname");
        let email = document.getElementById("email");
        let contactNumber = document.getElementById("contactNumber");
        let message = document.getElementById("message");

        let sendButton = document.getElementById("sendButton");
        
        sendButton.addEventListener("click", function(event){
            event.preventDefault();

            console.log("fname");
            console.log(email);
            console.log(contactNumber);
            console.log(message);
        });
    break;
    
} 

})(); // end of IIFE

