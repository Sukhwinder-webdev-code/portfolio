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
const customers = new Map();
customers.set(1234567890, new Customer('Rahul', 1234567890));
customers.set(6789012345, new Customer('Seema', 6789012345));

let operation = document.querySelectorAll('.btn');
operation.forEach(item => {
    item.addEventListener('click', (e) => {

        let operation = e.target.id;
        switch (operation) {
            case 'check':
                check();
                break;
            case 'create':
                createAccount();
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
    let choice = customers.get(enteredAccount)
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
        document.getElementById('amount').value = "";
        document.querySelector('#account').value = "";
        document.getElementById('balance').value = "";
        document.getElementById('name').value = "";
    }

}

// function to handle deposit and withdrawl of money
function handleTransaction(data) {
    document.getElementById('displayResults').textContent = "";
    let user = checkDetails();
    if (!user) return;
    let amount = Number(document.getElementById('amount').value);
    if (amount <= 0) { showResults("Please enter a valid amount first"); return; }
    let message = data === 'withdraw' ? user.withdraw(amount) : user.deposit(amount);
    showResults(message);
    document.getElementById('amount').value = null;
    document.querySelector('#account').value = null;
    document.getElementById('balance').value = null;
    document.getElementById('name').value = "";
}

//function to show results/
function showResults(message) {
    document.getElementById('amount').value = "";
    let result = document.getElementById('displayResults');
    result.textContent = message;

}

//function to create a new account/

function createAccount() {
    let customerName = document.getElementById('name').value.trim();
    if (customerName) {
        let newAccountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        let initialBalance = Number(document.getElementById('balance').value);
        if (initialBalance < 0 || isNaN(initialBalance)) showResults("Please enter a valid amount");
        else {
            customers.set(newAccountNumber, new Customer(customerName, newAccountNumber, initialBalance));
            Details = `New account created for ${customerName}! Account number: ${newAccountNumber}. Balance: ${initialBalance}`;
            showResults(Details);
            document.getElementById('amount').value = "";
            document.querySelector('#account').value = "";
            document.getElementById('balance').value = "";
            document.getElementById('name').value = "";
        }

    }
    else showResults("Please enter your name first!");
}
