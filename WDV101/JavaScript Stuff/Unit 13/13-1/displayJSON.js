function displayBook(title, obj) {
    // Step 1: Convert each object into a JSON formatted object
    const jsonFormattedObject = JSON.stringify(obj);

    // Step 2: Display JSON-formatted object on the page
    document.write(`<h2>${title}</h2>`);
    document.write(`<p>JSON Format on Page: ${jsonFormattedObject}</p>`);
    document.write('<hr>');

    // Step 3: Display JSON-formatted object on the console
    console.log(`${title}:\n`, obj);
}

function displayMasterBook(title, obj) {
    // Convert each object into a JSON formatted object
    const jsonFormattedObject = JSON.stringify(obj);

    // Display information on the web page
    document.write(`<h2>${title}</h2>`);
    document.write(`<p>Title: ${obj.bookTitle}</p>`);
    document.write(`<p>Author: ${obj.bookAuthor}</p>`);
    document.write(`<p>Price: ${obj.bookPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>`);
    document.write(`<p>Discounted Price: ${obj.studentDiscountPrice()}</p>`);
    document.write(`<p>JSON Format on Page: ${jsonFormattedObject}</p>`);
    document.write('<hr>');

    // Display JSON-formatted object on the console
    console.log(`${title}:\n`, obj);
}
