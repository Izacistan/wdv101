// 1. Create funciton called compareNumbers()
function compareNumbers() {
/**
 * This function takes two numbers from the form, validates the input
 * to ensure that it is a number and also not blank space, then it 
 * compares the values of the numbers returning different results 
 * depending on their value.
*/

let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

// 3. Validation
if (num1.trim() === '' || isNaN(num1) || num2.trim() === '' || isNaN(num2)) {
    alert('Please enter valid numeric values in both fields.');
    return null;
}

// 2. Compare two numbers from the forms
if (parseFloat(num1) > parseFloat(num2)) {
    return num1;
} else if (parseFloat(num1) < parseFloat(num2)) {
    return num2;
} else {
    return "Equal";
}

}

// 5. Display results in <span> tag
function displayResult() {
/** 
 * This function runs the compareNumbers() function and displays
 * the results of that function in a <span> tag.
*/

let result = compareNumbers();
let resultSpan = document.querySelector(".results");

// 5. Use innerHTML to display results
resultSpan.innerText = result;
}

// 6. Reset Function
function clearResults() {
/**
 * This function removes the "results" content from the <span> element.
 */
let resultSpan = document.querySelector(".results");
resultSpan.innerText = '';
}