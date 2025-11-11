function createBankAccount(initialDeposit = 0,pin) {
    let securityPin = pin;
    let bankBalance = initialDeposit;
    const transactionHistory = [];
    // {transactionId, dateAndTimeOfTransaction, transactionType, amount}

    if (initialDeposit > 0) {
        transactionHistory.push({
            transactionId: transactionHistory.length + 1,
            dateAndTimeOfTransaction: getCurrentDateAndTime(), //'10/11/2025, 3:42:27 pm'
            transactionType: "initial deposit",
            amount: initialDeposit
        });
        console.log(`Initially deposited ${initialDeposit} successfully!`);
    }

    function getCurrentDateAndTime() {
        const now = new Date();
        return now.toLocaleString();
    }

    function currentBalance(pin) {
        if(pin != securityPin){
            console.log("please check your PIN");
            return;
        }
        console.log(`Total Bank Balance: ${bankBalance}`);
    }

    function printStatement(pin) {
        if(pin != securityPin){
            console.log("please check your PIN");
            return;
        }
        if (transactionHistory.length === 0) {
            return;
        }

        transactionHistory.map((transaction) =>
            console.log(`${transaction.dateAndTimeOfTransaction} - ${transaction.transactionType} : ${transaction.amount}`)
        );

        currentBalance(pin);
    }

    function depositAmount(amountToBeDeposited , pin) {
        if(pin != securityPin){
            console.log("please check your PIN");
            return;
        }
        bankBalance = bankBalance + amountToBeDeposited;
        transactionHistory.push({
            transactionId: transactionHistory.length + 1,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: "deposit",
            amount: amountToBeDeposited
        });
        console.log(`Successfully deposited ${amountToBeDeposited} into your bank account.`);

        currentBalance(pin);
    }

    function withdrawAmount(amountToBeWithdrawn , pin) {
        if(pin != securityPin){
            console.log("please check your PIN");
            return;
        }
        if (amountToBeWithdrawn > bankBalance) {
            console.log("Insufficient Balance!");
            currentBalance();
            return;
        }
        bankBalance = bankBalance - amountToBeWithdrawn;
        transactionHistory.push({
            transactionId: transactionHistory.length + 1,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: "withdraw",
            amount: amountToBeWithdrawn
        });
        console.log(`Successfully withdrawn ${amountToBeWithdrawn} from your bank account.`);
        currentBalance();
    }
    function changePin(oldPin,newPin){
        if(oldPin === securityPin){
            securityPin = newPin;
            console.log("PIN change Successful");
        }
        else{
            console.log("Check Your Old PIN");
            return;
        }

    }

    return {
        depositAmount,
        printStatement,
        currentBalance,
        withdrawAmount,
        changePin
    };
}

const sundeeepAccount = createBankAccount(1000,"7890");

sundeeepAccount.depositAmount(300,"7890");
// sundeeepAccount.withdrawAmount(400);
sundeeepAccount.printStatement("7890");
sundeeepAccount.changePin("7890","0987");
sundeeepAccount.depositAmount(300,"7890");
sundeeepAccount.depositAmount(300,"0987");



