// P1-1. Create a class called masterBook that defines three properties: bookTitle, bookPrice, bookAuthor
class MasterBook {
    constructor(bookTitle, bookPrice, bookAuthor) {
        this.bookTitle = bookTitle;
        this.bookPrice = bookPrice;
        this.bookAuthor = bookAuthor;
    }
    
    // P1-2. In the masterBook class define a method call studentDiscountPrice( ). 
    // The method will return the bookPrice discounted by 20%. The return value 
    // should be formatted as currency.
    studentDiscountPrice() {
        const discountedPrice = this.bookPrice * 0.8;
        return discountedPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
}
