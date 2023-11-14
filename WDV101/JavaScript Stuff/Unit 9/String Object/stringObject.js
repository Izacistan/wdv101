function getEmailPart(part) {
    /**
     * This function retireives the value from the #inEmail input and offers several
     * ways to display it to the screen.
     * 
     * 1. The user presses the "Display Email Address Button", which takes the FULL email 
     * address and places it within a <span> tag.
     * 
     * 2. The user selects the "Display Username of the Email Address" button and displays 
     * the "name" portion of the email address in its own <span> tag.
     * 
     * 3. If the user selects the "Display Domain name of the email address" button, then 
     * the domain name is displayed in its own <span> tag.
     * 
     * Simple validation is used to ensure the user enters a valid email address.
     * 
     * The split() method is used to break up the email address (and subsequently the 
     * top-level domain) to make it simpler to get the values needed to display.
    */

    // Get email address value
    let emailAddress = document.getElementById("inEmail").value;
    let errorMessageSpan = document.querySelector(".errorMessage");

    // Ensure error message is removed when function is called again.
    errorMessageSpan.style.display = "none";

    // Get <span>'s to display relevant portion of email address
    let emailResultSpan = document.querySelector(".emailResults");
    let emailNameResultSpan = document.querySelector(".emailNameResults");
    let emailDomainResultSpan = document.querySelector(".emailDomainResults");

    // Input validation: Only letters, @'s, and ' . ' allowed
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailAddress)) {
        // Input contains invalid characters
        errorMessageSpan.style.display = "inline";
    } else {
        // Split email address into name and domain
        const emailParts = emailAddress.split('@');

        // Check if the domain is ".edu" and apply light blue background
        if (emailParts[1].split('.')[1] === "edu") {
            emailDomainResultSpan.style.backgroundColor = "lightblue";
        } else {
            emailDomainResultSpan.style.backgroundColor = "transparent"; // Reset background
        }

        // Display the requested part
        if (part === 'name') {
            emailNameResultSpan.innerText = " " + emailParts[0];
        } else if (part === 'domain') {
            emailDomainResultSpan.innerText = " " + emailParts[1];
        } else {
            emailResultSpan.innerText = " " + emailAddress;
        }
    }
}

function clearResults() {
    /**
     * This function returns the various result <span>'s to their original values. 
    */
    let emailResultSpan = document.querySelector(".emailResults");
    let emailNameResultSpan = document.querySelector(".emailNameResults");
    let emailDomainResultSpan = document.querySelector(".emailDomainResults");
        
    emailResultSpan.innerText = '';
    emailNameResultSpan.innerText = '';
    emailDomainResultSpan.innerText = '';

  }
