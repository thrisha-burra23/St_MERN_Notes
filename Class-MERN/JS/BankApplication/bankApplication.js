const createAccount = (initialDeposit = 0, initialPin) => {

    if (!initialPin) {
        console.log("please create and enter your pin to create account ")
        return;
    }
    let bankBalance = initialDeposit;
    const transactionHistory = [];
    let pin = initialPin;

    const getCurrentDateAndTime = () => {
        let dateAndTime = new Date();
        return dateAndTime.toLocaleString();
    }

    const checkBalance = () => {
        console.log(`Total Balance:  ${bankBalance}`);
    }

    const getRecentTotal = () => {
        const limitTime = 30 * 60 * 1000;
        const now = new Date();
        return transactionHistory.filter((transaction) => {
            const time = transaction.dateAndTimeOfTransaction;
            return now = time <= limitTime;
        })
    }

    if (initialDeposit > 0) {
        transactionHistory.push({
            transactionId: ` ${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: "initial deposit",
            amount: initialDeposit
        })
        console.log(`account created with inital amount ${initialDeposit}`)
        checkBalance();
    }

    const changePin = (oldpin, newPin) => {
        if (!oldpin || !newPin) {
            console.log("Please enter pin correctly..")
            return;
        }
        if (oldpin == pin)
            pin = newPin;
        console.log("Pin changed");
    }

    const checkPin = (userPin) => {
        if (userPin === pin)
            return true;
        else
            return false;

    }

    const depositAmount = (amountToBeDeposited) => {
        bankBalance = bankBalance + amountToBeDeposited;

        transactionHistory.push({
            transactionId: ` ${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: " deposit",
            amount: amountToBeDeposited
        })

        console.log(`Deposited ${amountToBeDeposited} successfully`);
        checkBalance();
    }

    const withdrawnAmount = (amountToBeWithdrawn, userpin) => {
        if (amountToBeWithdrawn > bankBalance) {
            console.log("insufficient balance...")
            return;
        }
        if (!checkPin(userpin)) {
            console.log("Please enter cirrect pin")
            return;
        }
        bankBalance = bankBalance - amountToBeWithdrawn;
        transactionHistory.push({
            transactionId: ` ${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: " withdraw",
            amount: amountToBeWithdrawn
        })

        console.log(`Withdrawed ${amountToBeWithdrawn} successfully`);
        checkBalance();
    }

    const printStatement = () => {
        if (!transactionHistory) {
            console.log("no Transactions done...")
            return;
        }

        transactionHistory.map((transaction) => {
            console.log(`${transaction.dateAndTimeOfTransaction} - ${transaction.transactionType} : ${transaction.amount}`)
        })

        checkBalance();
    }

    return {

        checkBalance,
        depositAmount,
        withdrawnAmount,
        printStatement,
        changePin

    }


}

const Account = createAccount(1000, 1234);
Account.withdrawnAmount(999, 1234);
Account.changePin(1234, 2222);


