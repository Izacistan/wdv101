// Product objects have the following properties and methods
// prod_name
// prod_number
// prod_manufacture_price
// prod_suggestedRetailPrice( )
// this function will create the suggested retail price of the object
// to calculate take manufacture_price times 1.67

// Function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

class Product {
    constructor(name, number, manufacturePrice) {
        this.prod_name = name;
        this.prod_number = number;
        this.prod_manufacture_price = manufacturePrice;
    }

    prod_suggestedRetailPrice() {
        return this.prod_manufacture_price * 1.67;
    }
}

// Create productList array
const productList = [];
for (let i = 0; i < productNames.length; i++) {
    const product = new Product(productNames[i], productNumbers[i], productManPrices[i]);
    productList.push(product);
}

// Display the number of products
document.getElementById('productCount').innerText = productList.length;

// Display products in the div element
const productOutputDiv = document.getElementById('productOutput');
productList.forEach(product => {
    const productElement = document.createElement('p');
    productElement.innerHTML = `
        Product: ${product.prod_name}</br>
        Product Number: ${product.prod_number}<br>
        Product Wholesale Price: ${formatCurrency(product.prod_manufacture_price)}</br>
        Product Suggested Retail Price: ${formatCurrency(product.prod_suggestedRetailPrice())}</br>
    `;
    productOutputDiv.appendChild(productElement);
});

// Convert one product to JSON and display in the console
const jsonProduct = JSON.stringify(productList[0]);
console.log(jsonProduct);
