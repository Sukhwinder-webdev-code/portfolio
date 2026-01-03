class Customer {
    constructor(name, accountNo, balance = 0) {
        this.name = name;
        this.accountNo = accountNo;
        this.balance = balance;
    }
    checkBalance() {
        return `The Current balance for Account:${this.accountNo} is Rs.${this.balance}`;
    }
    deposit(amount) {
        this.balance += amount;
        return `Rs:${amount} deposited to  Account:${this.accountNo}! Total balance is Rs.${this.balance}`
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return `You do not have sufficient balance ${this.name}!`;
        }
        else {
            this.balance -= amount;
            return `Rs ${amount} withdrawn! Now balance is ${this.balance}`;
        }
    }

}
const customer1 = new Customer('Rahul', 123456);
const customer2 = new Customer('Seema', 678901);
const customers = [customer1, customer2]; // valid bank customers.

let operation = document.querySelectorAll('.operation');
operation.forEach(item => {
    item.addEventListener('click', (e) => {
        let operation = e.target.id;
        switch (operation) {
            case 'check':
                check();
                break;
            case 'withdraw':
                handleTransaction('withdraw');
                break;
            case 'deposit':
                handleTransaction('deposit');
                break;

        }

    })
});
// function to check if the entered details are valid;
function checkDetails() {
    let enteredAccount = Number(document.querySelector('#account').value);
    let choice = customers.find(c => c.accountNo === enteredAccount)
    if (!Number.isInteger(enteredAccount) || enteredAccount <= 0) {
        showResults("Please enter a valid account number!");
        return null;
    }
    if (!choice) { showResults("Account not found!"); return null }
    else return choice;
}



//function expression to check balance of the user
const check = () => {
    let user = checkDetails();
    if (user) {
        let message = user.checkBalance();
        showResults(message);
    }

}

// function to handle deposit and withdrawl of money
function handleTransaction(data) {
    let user = checkDetails();
    if (!user) return;
    let amount = Number(document.getElementById('amountHolder').value);
    if (amount <= 0) { showResults("Please enter a valid amount first"); return; }
    let message = data === 'withdraw' ? user.withdraw(amount) : user.deposit(amount);
    showResults(message);
}

//function to show results/
function showResults(message) {
    let result = document.getElementById('result');
    result.textContent = message;

}
