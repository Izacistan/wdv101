// JavaScript Document

document.addEventListener('DOMContentLoaded', function () {
	/***
	 * This function ensures that the functions in this file 
	 * only run once the DOM Content has been loadeds.
	 */
    greeting('greetingBlock');
	displayTodaysDate('dateBlock');
	updateCopyright('copyrightBlock');
});


function greeting(inLocation)
{
	let greetingBlock = document.querySelector("#" + inLocation);	
	greetingBlock.style.color = "#483D8B";
	greetingBlock.style.fontSize = "150%";							
	greetingBlock.style.textAlign = "center";			

	let today = new Date();	//Create a date object called today with todays date and time in it.
	currentTime = today.getHours();	//Pull the hour of the day from the date object.  
	
	if(currentTime >= 6 && currentTime < 12)
	{
		greetingBlock.innerHTML = "Good Morning!";
	}
	else
	{
		if(currentTime >= 12 && currentTime <17)
		{
			greetingBlock.innerHTML = "Good Afternoon!";
		}
		else
		{
			greetingBlock.innerHTML = "Good Evening";
		}
	}
	
}//end greeting()

function displayTodaysDate(inDateLocation) {
	/**
	 * This function grabs the correct ID to display the current 
	 * date (Month/Day/Year formatting), formats the Date object 
	 * display the formatted date, and inserts it in the correct 
	 * element with the matching ID.
	 */
    let dateBlock = document.querySelector("#" + inDateLocation);
    let options = { month: 'long', day: 'numeric', year: 'numeric' };
    let formattedDate = new Date().toLocaleDateString('en-US', options);
    dateBlock.innerHTML = formattedDate;
}

function updateCopyright(inCopyrightLocation) {
	/**
	 * This function finds the <p> element where the copyright 
	 * information is meant to display. It then creates a new date object 
	 * formatted for displaying the YEAR only. We also create a 'copyright' 
	 * symbol using its unicode value, then displaying it alongside the YEAR 
	 * date in the DOM.
	 */
    let copyrightBlock = document.querySelector("#" + inCopyrightLocation);
    let currentYear = new Date().getFullYear();
    let copyrightSymbol = '\u00A9';

    copyrightBlock.innerHTML = `${copyrightSymbol} ${currentYear} DMACC All rights reserved`;
}