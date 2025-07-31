class BankAccount{
    static nextAccountNumber =1001;
    constructor(name,balance){
        this.name = name;
        this._accountNumber = BankAccount.nextAccountNumber++;
        this._balance = balance;
        this._transactionHistory = [];
    }
    get accountInfo() {
        return {
            name: this.name,
            accountNumber: this._accountNumber,
            balance: this._balance
        };
    }
    
    get balanceStatus() {
        if (this._balance > 0) {
            if (this._balance >= 50000) {
                return "Rich";
            } else if (this._balance >= 10000) {
                return "Good";
            } else {
                return "Low";
            }
        } else {
            return "Invalid Balance";
        }
    }
    
    set deposit(amount) {
        if (amount > 0) {
            this._balance = this._balance + amount;

            const time = new Date().toLocaleString("en-GB");
            this._transactionHistory.push(`Deposited: ${amount} at ${time}`);
        } else {
            console.log("Invalid deposit amount");
        }

    }
    
    set withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance = this._balance - amount;

            const time = new Date().toLocaleString("en-GB");
            this._transactionHistory.push(`Withdrawed: ${amount} at ${time}`);
        } else {
            console.log("Insufficient funds");
        }

    }
    get transactionRecord(){
        return this._transactionHistory;
    }
    set accountHolder(newName){
        if(newName !== this.name){
            console.log("The User changed his name from",this.name,"to:",newName);
            this.name = newName;
        }
        else{
            console.log("User exists in thr Record");
        }
    }

}   

// Create account
let acc1 = new BankAccount("Shehzad", 40000);

// Test all features
console.log("Account Info:", acc1.accountInfo);

acc1.deposit = 15000;
console.log("After Deposit - Balance Status:", acc1.balanceStatus);
console.log("Transaction History:", acc1.transactionRecord);

acc1.withdraw = 5000;
console.log("After Withdraw - Balance Status:", acc1.balanceStatus);
console.log("Transaction History:", acc1.transactionRecord);

// Invalid deposit/withdraw
acc1.deposit = -500;
acc1.withdraw = 999999;

// Change name
acc1.accountHolder = "Ali";


// Final summary
console.log("Final Info:", acc1.accountInfo);
console.log("Final Transaction History:", acc1.transactionRecord);
