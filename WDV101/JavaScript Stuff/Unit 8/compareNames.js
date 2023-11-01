// 7. Placed the JavaScript functions in their own file.

  // 1. Create a function called compareNames
  function compareNames() {
    /** 
     * This function grabs the values from the two form fields, converts them to uppercase for proper comparision,
     * and then checks if the names are the same, returning different results depending on the answer.
    */

    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    // 3. Case insensitive numbers
    name1 = name1.toUpperCase();
    name2 = name2.toUpperCase();

    // 2. Compare two input values from the forms
    if (name1 === name2) {

      // 4. Return Same
      return "Same"

    } else {

      // 4. Return Different
      return "Different"

    }

  }

  function displayResult() {
    /** 
     * This function runs the compareNames() function and displays
     * the results of that function in a <span> tag.
    */

    let result = compareNames();
    let resultSpan = document.querySelector(".results");

    // 5. Use innerHTML to display results
    resultSpan.innerText = result;
}

  // 6. Reset Function that Clears Results
  function clearResults() {
    /**
     * This function removes the "results" content from the <span> element.
    */
    let resultSpan = document.querySelector(".results");
    resultSpan.innerText = '';
  }