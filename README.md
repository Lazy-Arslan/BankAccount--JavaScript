# 🏦 BankAccount OOP Class in JavaScript

This project demonstrates Object-Oriented Programming (OOP) in JavaScript using a `BankAccount` class. It's designed to practice and showcase real-world OOP concepts like encapsulation, static properties, getters/setters, and basic transaction logging.

## 📂 Folder Structure
src/
└── bankAccount.js

## 📜 Features

- 🔒 Private balance and transaction history
- 🔢 Auto-incremented account numbers
- 💰 Deposit and withdrawal methods with validation
- 🧾 Transaction history tracking with timestamps
- 👤 Name change with logging
- 📊 Balance status categorization

## 🛠 Technologies Used

- JavaScript (ES6+)
- Node.js (for testing locally if needed)

## ✅ Sample Usage

```javascript
let sheh = new BankAccount("Shehzad", 40000);

console.log(sheh.accountInfo);       // { name: 'Shehzad', accountNumber: 1001, balance: 40000 }

sheh.deposit = 15000;                // Adds amount and logs it with timestamp
console.log(sheh.balanceStatus);     // Rich, Good, or Low based on balance

console.log(sheh.transactionRecord); // Shows all transactions
sheh.accountHolder = "Ali";          // Updates name with message

📌 Author
Made with ❤️ by Lazy-Arslan
