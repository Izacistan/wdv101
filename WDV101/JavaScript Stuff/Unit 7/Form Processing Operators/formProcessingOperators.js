function getNumbers(inValue) {
    /**
     * PROBLEMS 1 & 2:
     * This function gets the values for Problems 1 & 2. The IF Statement 
     * then checks if the value is from the value1 or value2 text input, then 
     * placing them in their respective places.
     */

    if (inValue === 'value1') {
      let inValue1 = document.getElementById("value1").value;
      
      // Check if the input is a valid number
      if (isNaN(inValue1)) {
        alert("Please enter a valid number for Value 1");
        return;
      }
  
      document.getElementById("displayValue1").value = inValue1;
  
    } else if (inValue === 'value2') {
      let inValue2 = document.getElementById("value2").value;
  
      // Check if the input is a valid number
      if (isNaN(inValue2)) {
        alert("Please enter a valid number for Value 2");
        return;
      }
  
      document.getElementById("displayValue2").value = inValue2;
    }
  }

function multiplyNumbers() {
    /**
     * PROBLEM 3:
     * This function takes the current values of the input fields 
     * and multiplies them, displaying their results in a <span> tag.
     */

    // Get current values of input fields
    value1 = document.querySelector("#displayValue1").value;
    value2 = document.querySelector("#displayValue2").value;

    // Convert to float for math operations
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Get correct <span> to display results
    resultSpan = document.querySelector("#productResult");

    // Calculate answer
    answer = value1 * value2;

    // Display answer in <span>
    resultSpan.innerText = answer;

}

function addNumbers() {
    /**
     * PROBLEM 4:
     * This function takes the current values of the input fields 
     * and add their values together, displaying in a <span> tag.
     */

    // Get current values of input fields
    value1 = document.querySelector("#displayValue1").value;
    value2 = document.querySelector("#displayValue2").value;

    // Convert to float for math operations
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Get correct <span> to display results
    resultSpan = document.querySelector("#sumResult");

    // Calculate answer
    answer = value1 + value2;

    // Display answer in <span>
    resultSpan.innerText = answer;

}

// Global variable so it updates properly
let count = 0;

function incrementCount() {
    /***
     * PROBLEM 5:
     * This function incremments the global variable "count" and dispalys it 
     * in the corresponding <span>
     */
    resultSpan = document.querySelector("#countResults");

    // Increment counter
    count++;

    resultSpan.innerText = "Counter: " + count;
}