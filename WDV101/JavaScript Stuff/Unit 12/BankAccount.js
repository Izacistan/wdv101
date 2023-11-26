class BankAccount {
    constructor(inBalance) {
      this._accountNumber = generateAccountNumber();
      this._accountName = "";
      this._accountBalance = inBalance || 0;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    set accountName(name) {
      this._accountName = name;
    }
  
    get accountName() {
      return this._accountName;
    }
  
    set accountBalance(balance) {
      this._accountBalance = balance;
    }
  
    get accountBalance() {
      return this._accountBalance;
    }
  
    deposit(amount) {
      this._accountBalance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this._accountBalance) {
        this._accountBalance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  
    balance() {
      return this._accountBalance;
    }
  
    accountInfo() {
      return [this._accountName, this._accountNumber, this._accountBalance];
    }
  }
  
  // Helper function to generate a random account number (for demonstration purposes)
  function generateAccountNumber() {
    return Math.floor(Math.random() * 1000000000);
  }
    